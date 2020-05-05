var userService = require("./../service/userService.js");

module.exports = {
    userSignUp: function(req, res) {
        userService.signUp(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: 'Invalid Input' });
            }
        );
    },
};