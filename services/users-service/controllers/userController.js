var userService = require("./../service/userService");
const { body } = require("express-validator");

module.exports = {
    userSignUp: function(req, res) {
        userService.signUp(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
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
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    signOut: function(req, res) {
        userService.signOut(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    resetPassword: function(req, res) {
        userService.resetPassword(req).then(
            (data) => {
                res.status(202).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    forgotPassword: function(req, res) {
        userService.forgotPassword(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    addNewAddress: function(req, res) {
        userService.addNewAddress(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    updateAddress: function(req, res) {
        userService.updateAddress(req).then(
            (data) => {
                res.status(202).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    deleteAddress: function(req, res) {
        userService.deleteAddress(req).then(
            (data) => {
                res.status(202).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
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
                            body("otp", "Invalid OTP").isLength({ min: 6, max: 6 }).isNumeric(),
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
                            body("otp", "Invalid OTP").isLength({ min: 6, max: 6 }).isNumeric(),
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
            case "forgotPassword":
                {
                    return [
                        [
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone({ locale: "en-IN" }),
                            body("password", "Invalid Password").isLength({ min: 8 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
                            body("otp", "Invalid OTP").isLength({ min: 6, max: 6 }).isNumeric(),
                        ],
                    ];
                }
            case "addNewAddress":
                {
                    return [
                        [
                            body("name", "Invalid First Name").isAlpha().withMessage("Must be only alphabetical chars").isLength({ min: 3 }).withMessage("Must be at least 3 chars long"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone({ locale: "en-IN" }),
                            body("pincode", "Invalid Pincode").isNumeric().isLength({ min: 6, max: 6 }),
                            body("address", "Invalid Address").isString(),
                            body("city", "Invalid City").isString(),
                            body("state", "Invalid City").isString(),
                            body("landmark", "Invalid City").isString(),
                            body("type", "Invalid City").isString(),
                        ],
                    ];
                }
            case "updateAddress":
                {
                    return [
                        [
                            body("name", "Invalid First Name").isAlpha().withMessage("Must be only alphabetical chars").isLength({ min: 3 }).withMessage("Must be at least 3 chars long"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone({ locale: "en-IN" }),
                            body("pincode", "Invalid Pincode").isNumeric().isLength({ min: 6, max: 6 }),
                            body("address", "Invalid Address").isString(),
                            body("city", "Invalid City").isString(),
                            body("state", "Invalid City").isString(),
                            body("landmark", "Invalid City").isString(),
                            body("type", "Invalid City").isString(),
                            body("addressId", "Invalid Address").isNumeric(),
                        ],
                    ];
                }
            case "deleteAddress":
                {
                    return [
                        [
                            body("addressId", "Invalid Address").isNumeric(),
                        ],
                    ];
                }
        }
    },
};