var userController = require('./controllers/userController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));

    //app.use(tokenValidate);

    // SignUp User
    router.post('/user/signup', userController.validate('signUp'), userController.userSignUp);

    // Verify User by OTP While SignUp
    router.post('/user/verify', userController.validate('verifyUser'), userController.verifyUser);

    // SignIn User
    router.post('/user/signin', userController.validate('signIn'), userController.signIn);

    // SignOut User
    router.delete('/user/signout', userController.signOut);

    // Reset Password
    router.delete('/user/password/reset', userController.validate('resetPassword'), userController.resetPassword);
}