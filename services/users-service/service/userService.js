const auth = require("./../../custom-modules/auth/index");
const otp = require("./../../custom-modules/otp/index");
const db = require("./../../custom-modules/database/index");
var moment = require("moment");

module.exports = {
    signUp: function(req) {
        return new Promise(async(resolve, reject) => {
            const user = req.body;
            let OTP = await otp.verifyOtp(user.mobile_number, user.otp);
            if (OTP.valid) {
                auth
                    .hashPassword(user.password)
                    .then((hashedPassword) => {
                        delete user.password;
                        user.password_digest = hashedPassword;
                    })
                    .then(() =>
                        auth.createToken(user.username, user.userrole, user.mobile_number)
                    )
                    .then((token) => (user.token = token))
                    .then(() => createUser(user))
                    .then((user) => {
                        delete user.password_digest;
                        resolve(user);
                    })
                    .catch((err) => {
                        console.error(err);
                        reject(err.message);
                    });
            } else {
                reject("Invalid OTP");
            }
        });
    },
    verifyUser: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { mobile_number } = req.body;
                let validUser = await findUser(mobile_number);
                if (req.originalUrl === "/api/user/signup/verify") {
                    if (!validUser) {
                        let res = await otp.sendOtp(mobile_number);
                        resolve(res);
                    } else {
                        reject("Account Already Registered with this Mobile Number.");
                    }
                } else {
                    if (validUser) {
                        let res = await otp.sendOtp(mobile_number);
                        resolve(res);
                    } else {
                        reject("Invalid Mobile Number");
                    }
                }
            } catch (error) {
                reject(error.message);
            }
        });
    },
    signIn: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { mobile_number, password } = req.body;
                findUser(mobile_number)
                    .then((foundUser) => {
                        user = foundUser;
                        return checkPassword(password, foundUser);
                    })
                    .then((res) => auth.createToken())
                    .then((token) => updateUserToken(token, mobile_number, true))
                    .then(() => {
                        delete user.password_digest;
                        resolve(user);
                    })
                    .catch((err) => {
                        console.error(err);
                        reject(err.message);
                    });
            } catch (error) {
                reject(error.message);
            }
        });
    },
    signOut: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                await updateUserToken("", req.user.mobile_number, false);
                resolve("User Logged Out Successfully");
            } catch (error) {
                reject(error.message);
            }
        });
    },
    resetPassword: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { oldPassword, newPassword } = req.body;

                findUser(req.user.mobile_number)
                    .then((foundUser) => {
                        user = foundUser;
                    })
                    .then(() => checkPassword(oldPassword, foundUser))
                    .then(() => auth.hashPassword(newPassword))
                    .then((newHashedPassword) =>
                        updatePassword(newHashedPassword, req.user.mobile_number)
                    )
                    .then(() => {
                        resolve("Password Reset Successful");
                    })
                    .catch((err) => {
                        console.error(err);
                        reject(err.message);
                    });
            } catch (error) {
                reject(error.message);
            }
        });
    },
    forgotPassword: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { password, otp, mobile_number } = req.body;
                let OTP = await otp.verifyOtp(password, otp);
                if (OTP.valid) {
                    findUser(mobile_number)
                        .then((foundUser) => {
                            user = foundUser;
                        })
                        .then(() => auth.hashPassword(password))
                        .then((newHashedPassword) =>
                            updatePassword(newHashedPassword, mobile_number)
                        )
                        .then(() => {
                            resolve("Password Updated Successfully");
                        })
                        .catch((err) => {
                            console.error(err);
                            reject(err.message);
                        });
                } else {
                    reject("Invalid OTP");
                }
            } catch (error) {
                reject(error.message);
            }
        });
    },
    addNewAddress: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const address = req.body;
                let userId = await getUserID(req.user.mobile_number);
                address.userId = userId;
                await insertAddress(address);
                resolve("Address Added Successfully");
            } catch (error) {
                reject(error.message);
            }
        });
    },
    updateAddress: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const address = req.body;
                let userId = await getUserID(req.user.mobile_number);
                address.userId = userId;
                let valid = await verifyAddress(address.addressId, userId);
                if (valid) {
                    await updateAddress(address);
                    resolve("Address Updated Successfully");
                } else {
                    reject("Address Not Registered");
                }
            } catch (error) {
                reject(error.message);
            }
        });
    },
    deleteAddress: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { addressId } = req.body;
                let userId = await getUserID(req.user.mobile_number);
                address.userId = userId;
                let valid = await verifyAddress(addressId, userId);
                if (valid) {
                    await deleteAddress(addressId, userId);
                    resolve("Address Deleted Successfully");
                } else {
                    reject("Address Not Registered");
                }
            } catch (error) {
                reject(error.message);
            }
        });
    },
};

const createUser = (user) => {
    return new Promise(async(resolve, reject) => {
        user.username = user.firstname + user.lastname;
        let query =
            "INSERT INTO USERS (FIRSTNAME,LASTNAME,USERNAME,EMAILID,MOBILENUMBER,USERROLE,TOKEN,ISLOGGEDIN,PASSWORD,CREATEDAT) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
        let values = [
            user.firstname,
            user.lastname,
            user.username,
            user.email,
            user.mobile_number,
            user.userrole,
            user.token,
            true,
            user.password_digest,
            moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
        ];
        try {
            await db.parameterizedQuery(query, values);
            resolve(user);
        } catch (error) {
            reject(error.message);
        }
    });
};

const findUser = (mobile_number) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM USERS WHERE MOBILENUMBER='" +
                mobile_number +
                "');";
            let res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error.message);
        }
    });
};

const checkPassword = (reqPassword, foundUser) => {
    return new Promise((resolve, reject) =>
        bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
            if (err) {
                reject(err.message);
            } else if (response) {
                resolve(response);
            } else {
                reject(new Error("Passwords do not match."));
            }
        })
    );
};

const updateUserToken = (token, mobile_number, logged_in) => {
    let query =
        "UPDATE USERS SET TOKEN = '" +
        token +
        "', ISLOGGEDIN=" +
        logged_in +
        " WHERE MOBILENUMBER ='" +
        mobile_number +
        "'";
    return db.basicQuery(query).then((data) => data.rows[0]);
};

const updatePassword = (password, mobile_number) => {
    let query =
        "UPDATE USERS SET PASSWORD = '" +
        password +
        "' WHERE MOBILENUMBER ='" +
        mobile_number +
        "'";
    return db.basicQuery(query).then((data) => data.rows[0]);
};

const insertAddress = (address) => {
    return new Promise(async(resolve, reject) => {
        let query =
            "INSERT INTO ADDRESS (NAME,MOBILENUMBER,PINCODE,ADDRESS,CITY,STATE,LANDMARK,TYPE,USERID,CREATEDAT) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
        let values = [
            address.name,
            address.mobile_number,
            address.pincode,
            address.address,
            address.city,
            address.state,
            address.landmark,
            address.type,
            address.userId,
            moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
        ];
        try {
            await db.parameterizedQuery(query, values);
            resolve(user);
        } catch (error) {
            reject(error.message);
        }
    });
};

const getUserID = (mobile_number) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT USERID FROM USERS WHERE MOBILENUMBER='" + mobile_number + "');";
            let res = await db.basicQuery(query);
            if (res.length > 0) {
                resolve(res[0].userid);
            } else {
                reject("Invalid User");
            }
        } catch (error) {
            reject(error.message);
        }
    });
};

const verifyAddress = (addressId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM ADDRESS WHERE ADDRESSID=" +
                addressId +
                " AND USERID=" +
                userId +
                ");";
            let res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error.message);
        }
    });
};

const updateAddress = (address) => {
    let query =
        "UPDATE ADDRESS SET NAME='" +
        address.name +
        "', MOBILENUMBER='" +
        address.mobile_number +
        "', PINCODE='" +
        address.pincode +
        "', ADDRESS='" +
        address.address +
        "', CITY='" +
        address.city +
        "', STATE='" +
        address.state +
        "', LANDMARK='" +
        address.landmark +
        "', TYPE='" +
        address.type +
        "', UPDATEDAT='" +
        moment().format("YYYY-MM-DD HH:mm:ss.SSSSS") +
        "' WHERE USERID=" +
        address.userId + " AND ADDRESSID=" + address.addressId;
    return db.basicQuery(query).then((data) => data.rows[0]);
};

const deleteAddress = (addressId, userId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "DELETE * FROM ADDRESS WHERE ADDRESSID=" +
                addressId +
                " AND USERID=" +
                userId +
                ";";
            let res = await db.basicQuery(query);
            resolve(res);
        } catch (error) {
            reject(error.message);
        }
    });
};