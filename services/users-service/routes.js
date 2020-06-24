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
    router.post('/user/signup/verify', userController.validate('verifyUser'), userController.verifyUser);

    // SignIn User
    router.post('/user/signin', userController.validate('signIn'), userController.signIn);

    // SignOut User
    router.delete('/user/signout', userController.signOut);

    // Reset Password
    router.put('/user/password/reset', userController.validate('resetPassword'), userController.resetPassword);

    // Verify User by OTP While Forgot-Password
    router.post('/user/forgot-password/verify', userController.validate('verifyUser'), userController.verifyUser);

    // Forgot Password
    router.post('/user/forgot-password', userController.validate('forgotPassword'), userController.forgotPassword);

    // Get Addresses Registered by User
    router.get('/user/address', userController.getAddress);

    // Add New Address
    router.post('/user/address', userController.validate('addNewAddress'), userController.addNewAddress);

    // Update Address
    router.put('/user/address', userController.validate('updateAddress'), userController.updateAddress);

    // Delete Address
    router.delete('/user/address', userController.validate('deleteAddress'), userController.deleteAddress);

}