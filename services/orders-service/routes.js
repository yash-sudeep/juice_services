var orderController = require('./controllers/orderController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));
    
    // Get All Orders of a User
    router.get('/order', orderController.getUserWiseOrders);
    
    // Add New Order
    router.post('/order', orderController.validate("placeOrder"), orderController.placeOrder);

    // Order Cancellation
    router.delete('/order', orderController.cancelOrder);
    
    // router.get('/getallorders/:id', orderController.CancelOrder);
}

