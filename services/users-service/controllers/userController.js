var userService = require("./../service/userService");

module.exports = {

    userSignUp: function(req, res) {
        console.log("In User Controller");
        userService.signUp(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: 'Invalid Input' });
            }
        );
    }
}