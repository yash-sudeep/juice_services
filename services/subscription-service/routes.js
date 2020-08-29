var subscriptionController = require('./controllers/subscriptionController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));

    //app.use(tokenValidate);

    // Get All Subscriptions
    router.get('/subscription', subscriptionController.getAllSubscriptions);

    // Add New Subscription
    router.post('/subscription', subscriptionController.validate("addSubscription"), subscriptionController.addSubscription);

    // Update Existing Subscription
    router.put('/subscription', subscriptionController.validate("updateSubscription"), subscriptionController.updateSubscription);

    // Delete Subscription
    router.delete('/subscription', subscriptionController.deleteSubscription);
}