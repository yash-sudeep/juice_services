const auth = require("./../../custom-modules/auth/index");
const otp = require("./../../custom-modules/otp/index");
const db = require("./../../custom-modules/database/index");

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
                        reject(err);
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
                reject(error);
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
                        reject(err);
                    });
            } catch (error) {
                reject(error);
            }
        });
    },
    signOut: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                await updateUserToken("", req.user.mobile_number, false);
                resolve("User Logged Out Successfully");
            } catch (error) {
                reject(error);
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
                        reject(err);
                    });
            } catch (error) {
                reject(error);
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
                            reject(err);
                        });
                } else {
                    reject("Invalid OTP");
                }
            } catch (error) {
                reject(error);
            }
        });
    },
};

const createUser = (user) => {
    return new Promise(async(resolve, reject) => {
        user.username = user.firstname + user.lastname;
        let query =
            "INSERT INTO USERS (FIRSTNAME,LASTNAME,USERNAME,EMAILID,MOBILENUMBER,USERROLE,TOKEN,ISLOGGEDIN,PASSWORD) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
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
        ];
        try {
            await db.parameterizedQuery(query, values);
            resolve(user);
        } catch (error) {
            reject(error);
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
            reject(error);
        }
    });
};

const checkPassword = (reqPassword, foundUser) => {
    return new Promise((resolve, reject) =>
        bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
            if (err) {
                reject(err);
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