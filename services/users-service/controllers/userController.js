var userService = require("./../service/userService");
const { body } = require("express-validator");

module.exports = {
    userSignUp: function(req, res) {
        userService.signUp(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    verifyUser: function(req, res) {
        userService.verifyUser(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    signIn: function(req, res) {
        userService.signIn(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    signOut: function(req, res) {
        userService.signOut(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    resetPassword: function(req, res) {
        userService.resetPassword(req).then(
            (data) => {
                res.status(202).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    validate: function(name) {
        switch (name) {
            case "verifyUser":
                {
                    return [
                        [
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone({ locale: "en-IN" }),
                            body("otp", "Invalid OTP").isNumeric(),
                        ],
                    ];
                }
            case "signUp":
                {
                    return [
                        [
                            body("firstname", "Invalid First Name").isAlpha().withMessage("Must be only alphabetical chars").isLength({ min: 3 }).withMessage("Must be at least 3 chars long"),
                            body("lastname", "Invalid Last Name").isAlpha().withMessage("Must be only alphabetical chars").isLength({ min: 3 }).withMessage("Must be at least 3 chars long"),
                            body("email", "Invalid Email ID").isEmail(),
                            body("password", "Invalid Password").isLength({ min: 8 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone({ locale: "en-IN" }),
                            body("userrole").isMobilePhone({ locale: "en-IN" }),
                            body("otp", "Invalid OTP").isNumeric(),
                        ],
                    ];
                }
            case "signIn":
                {
                    return [
                        [
                            body("password", "Invalid Password").isLength({ min: 8 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone({ locale: "en-IN" }),
                        ],
                    ];
                }
            case "resetPassword":
                {
                    return [
                        [
                            body("oldPassword", "Invalid Old Password").isLength({ min: 8 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
                            body("newPassword", "Invalid New Password").isLength({ min: 8 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
                        ],
                    ];
                }
        }
    },
};