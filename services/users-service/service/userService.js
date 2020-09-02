const auth = require("./../../custom-modules/auth/index");
const Otp = require("./../../custom-modules/otp/index");
const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var moment = require("moment");
const e = require("express");

module.exports = {
    signUp: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const user = req.body;
                otp
                    .verifyOtp(user.mobile_number.toString(), user.otp.toString())
                    .then((OTP) => {
                        if (OTP.valid) {
                            auth
                                .hashPassword(user.password)
                                .then((hashedPassword) => {
                                    delete user.password;
                                    user.password_digest = hashedPassword;
                                })
                                .then(() =>
                                    auth.createToken(
                                        user.username,
                                        user.userrole,
                                        user.mobile_number
                                    )
                                )
                                .then((token) => (user.token = token))
                                .then(() => createUser(user))
                                .then((userObj) => {
                                    delete user.password_digest;
                                    resolve(user);
                                })
                                .catch((err) => {
                                    reject({ code: 400, message: "Bad Request" });
                                });
                        } else {
                            reject({ code: 422, message: "Invalid OTP" });
                        }
                    })
                    .catch((err) => {
                        reject({ code: 400, message: "Bad Request" });
                    });
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    verifyUser: function (req) {
        return new Promise((resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const { mobile_number } = req.body;
                validateUser(mobile_number).then(async (validUser) => {
                    if (req.originalUrl === "/api/user/signup/verify") {
                        if (!validUser) {
                            await Otp.sendOtp(mobile_number.toString());
                            resolve({ code: 200, message: "OTP Sent to Your Mobile Number" });
                        } else {
                            reject({
                                code: 409,
                                message: "This Mobile Number is already registered",
                            });
                        }
                    } else {
                        if (validUser) {
                            await Otp.sendOtp(mobile_number.toString());
                            resolve({ code: 200, message: "OTP Sent to Your Mobile Number" });
                        } else {
                            reject({
                                code: 404,
                                message: "Mobile Number provided is not registered",
                            });
                        }
                    }
                });
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    signIn: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }
                let user, authToken;
                const { mobile_number, password } = req.body;
                findUser(mobile_number)
                    .then((foundUser) => {
                        user = foundUser;
                        return checkPassword(password, foundUser.password);
                    })
                    .then((res) =>
                        auth.createToken(user.username, user.userrole, mobile_number)
                    )
                    .then((token) => {
                        authToken = token;
                        updateUserToken(token, mobile_number, true)
                    })
                    .then((data) => {
                        delete user.password;
                        delete user.isloggedin;
                        delete user.createdat;
                        user.token = authToken;
                        resolve(user);
                    })
                    .catch((err) => {
                        reject({ code: 400, message: err.message });
                    });
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    signOut: function (req) {
        return new Promise((resolve, reject) => {
            try {
                validateUser(req.user.mobile_number)
                    .then(async (valid) => {
                        if (valid) {
                            await updateUserToken("", req.user.mobile_number, false);
                            resolve("User Logged Out Successfully");
                        } else {
                            reject({ code: 422, message: 'Invalid User' });
                        }
                    })
                    .catch((err) => {
                        reject({ code: 400, message: err.message });
                    });
            } catch (error) {
                reject({ code: 500, message: 'Server Error' });
            }
        });
    },
    resetPassword: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                let user;
                const { oldPassword, newPassword } = req.body;
                findUser(req.user.mobile_number)
                    .then((foundUser) => {
                        user = foundUser;
                    })
                    .then(() => checkPassword(oldPassword, user.password))
                    .then(() => auth.hashPassword(newPassword))
                    .then((newHashedPassword) =>
                        updatePassword(newHashedPassword, req.user.mobile_number)
                    )
                    .then(() => {
                        resolve("Password Reset Successful");
                    })
                    .catch((err) => {
                        reject({ code: 400, message: err.message });
                    });
            } catch (error) {
                reject({ code: 500, message: 'Server Error' });
            }
        });
    },
    forgotPassword: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const { password, otp, mobile_number } = req.body;
                const OTP = await Otp.verifyOtp(password, otp);
                if (OTP.valid) {
                    findUser(mobile_number)
                        .then((foundUser) => {})
                        .then(() => auth.hashPassword(password))
                        .then((newHashedPassword) =>
                            updatePassword(newHashedPassword, mobile_number)
                        )
                        .then(() => {
                            resolve("Password Updated");
                        })
                        .catch((err) => {
                            reject({ code: 400, message: err.message });
                        });
                } else {
                    reject({ code: 422, message: "Invalid OTP" });
                }
            } catch (error) {
                reject({ code: 500, message: 'Server Error' });
            }
        });
    },
    getAddress: function (req) {
        return new Promise((resolve, reject) => {
            findUser(req.user.mobile_number).then(async (user) => {
                const query = "SELECT ADDRESSID as addressId,NAME,MOBILENUMBER,PINCODE,ADDRESS,LANDMARK,CITY,STATE,TYPE FROM ADDRESS WHERE USERID=" + user.userid;
                const res = await db.basicQuery(query);
                resolve(res);
            }).catch((err) => {
                reject({ code: 404, message: err.message });
            });
        });
    },
    addNewAddress: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const address = req.body;
                const userId = await getUserID(req.user.mobile_number);
                address.userId = userId;
                await insertAddress(address);
                resolve("Address Added");
            } catch (error) {
                reject({ code: 400, message: error.message });
            }
        });
    },
    updateAddress: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const address = req.body;
                const userId = await getUserID(req.user.mobile_number);
                address.userId = userId;
                const valid = await verifyAddress(address.addressId, userId);
                if (valid) {
                    await updateAddress(address, userId);
                    resolve("Address Updated");
                } else {
                    reject({ code: 404, message: "Address Not Registered" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    deleteAddress: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const addressId = req.query.addressId;
                if (addressId) {
                    const userId = await getUserID(req.user.mobile_number);
                    const valid = await verifyAddress(addressId, userId);
                    if (valid) {
                        await deleteAddress(addressId, userId);
                        resolve("Address Deleted");
                    } else {
                        reject({ code: 404, message: "Address Not Registered" });
                    }
                } else {
                    reject({ code: 400, message: "Invalid Input" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
};

const createUser = (user) => {
    return new Promise(async (resolve, reject) => {
        user.username = user.firstname + user.lastname;
        const query =
            "INSERT INTO USERS (FIRSTNAME,LASTNAME,USERNAME,EMAILID,MOBILENUMBER,USERROLE,TOKEN,ISLOGGEDIN,PASSWORD,CREATEDAT) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
        const values = [
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

const validateUser = (mobile_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT EXISTS (SELECT TRUE FROM USERS WHERE MOBILENUMBER='" +
                mobile_number +
                "');";
            const res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
};

const findUser = (mobile_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT * FROM USERS WHERE MOBILENUMBER='" + mobile_number + "';";
            const res = await db.basicQuery(query);
            if (res.length > 0) {
                resolve(res[0]);
            } else {
                reject(new Error("Invalid User"));
            }
        } catch (error) {
            reject(error.message);
        }
    });
};

const checkPassword = (newPassword, oldPassword) => {
    return new Promise((resolve, reject) =>
        bcrypt.compare(newPassword, oldPassword, (err, response) => {
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
    const query =
        "UPDATE USERS SET TOKEN = '" +
        token +
        "', ISLOGGEDIN=" +
        logged_in +
        " WHERE MOBILENUMBER ='" +
        mobile_number +
        "'";
    return db
        .basicQuery(query)
        .then((data) => data)
        .catch((err) => err);
};

const updatePassword = (password, mobile_number) => {
    const query =
        "UPDATE USERS SET PASSWORD = '" +
        password +
        "' WHERE MOBILENUMBER ='" +
        mobile_number +
        "'";
    return db
        .basicQuery(query)
        .then((data) => data)
        .catch((err) => err);
};

const insertAddress = (address) => {
    return new Promise(async (resolve, reject) => {
        const query =
            "INSERT INTO ADDRESS (NAME,MOBILENUMBER,PINCODE,ADDRESS,CITY,STATE,LANDMARK,TYPE,USERID,CREATEDAT) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
        const values = [
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
            const res = await db.parameterizedQuery(query, values);
            resolve(res);
        } catch (error) {
            reject(error.message);
        }
    });
};

const getUserID = (mobile_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT USERID FROM USERS WHERE MOBILENUMBER='" + mobile_number + "';";
            const res = await db.basicQuery(query);
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

const verifyAddress = (addressId, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT EXISTS (SELECT TRUE FROM ADDRESS WHERE ADDRESSID=" +
                addressId +
                " AND USERID=" +
                userId +
                ");";
            const res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error.message);
        }
    });
};

const updateAddress = (address, userId) => {
    const query =
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
        userId +
        " AND ADDRESSID=" +
        address.addressId;
    return db
        .basicQuery(query)
        .then((data) => data)
        .catch((err) => err);
};

const deleteAddress = (addressId, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "DELETE FROM ADDRESS WHERE ADDRESSID=" +
                addressId +
                " AND USERID=" +
                userId +
                ";";
            const res = await db.basicQuery(query);
            resolve(res);
        } catch (error) {
            reject(error.message);
        }
    });
};