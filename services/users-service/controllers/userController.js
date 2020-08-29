var userService = require("./../service/userService");
const { body } = require("express-validator");

module.exports = {
    userSignUp: function(req, res) {
        userService.signUp(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    verifyUser: function(req, res) {
        userService.verifyUser(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    signIn: function(req, res) {
        userService.signIn(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    signOut: function(req, res) {
        userService.signOut(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    resetPassword: function(req, res) {
        userService.resetPassword(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    forgotPassword: function(req, res) {
        userService.forgotPassword(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    getAddress: function(req, res) {
        userService.getAddress(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, address: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    addNewAddress: function(req, res) {
        userService.addNewAddress(req).then(
            (data) => {
                res.status(201).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    updateAddress: function(req, res) {
        userService.updateAddress(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    deleteAddress: function(req, res) {
        userService.deleteAddress(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    validate: function(name) {
        switch (name) {
            case "verifyUser":
                {
                    return [
                        [
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone("en-IN"),
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
                            body("password", "Invalid Password").isLength({ min: 8 }).matches(/^[\w!@#$%<>()?]{8,20}$/, "i"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone("en-IN"),
                            body("userrole").isString(),
                            body("otp", "Invalid OTP").isLength({ min: 6, max: 6 }).isNumeric(),
                        ],
                    ];
                }
            case "signIn":
                {
                    return [
                        [
                            body("password", "Invalid Password").isLength({ min: 8 }).matches(/^[\w!@#$%<>()?]{8,20}$/, "i"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone("en-IN"),
                        ],
                    ];
                }
            case "resetPassword":
                {
                    return [
                        [
                            body("oldPassword", "Invalid Old Password").isLength({ min: 8 }).matches(/^[\w!@#$%<>()?]{8,20}$/, "i"),
                            body("newPassword", "Invalid New Password").isLength({ min: 8 }).matches(/^[\w!@#$%<>()?]{8,20}$/, "i"),
                        ],
                    ];
                }
            case "forgotPassword":
                {
                    return [
                        [
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone("en-IN"),
                            body("password", "Invalid Password").isLength({ min: 8 }).matches(/^[\w!@#$%<>()?]{8,20}$/, "i"),
                            body("otp", "Invalid OTP").isLength({ min: 6, max: 6 }).isNumeric(),
                        ],
                    ];
                }
            case "addNewAddress":
                {
                    return [
                        [
                            body("name", "Invalid First Name").isAlpha().withMessage("Must be only alphabetical chars").isLength({ min: 3 }).withMessage("Must be at least 3 chars long"),
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone("en-IN"),
                            body("pincode", "Invalid Pincode").isNumeric().isLength({ min: 6, max: 6 }),
                            body("address", "Invalid Address").isString(),
                            body("city", "Invalid City").isString(),
                            body("state", "Invalid State").isString(),
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
                            body("mobile_number", "Invalid Mobile Number").isMobilePhone("en-IN"),
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
        }
    },
};