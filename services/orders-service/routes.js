var orderController = require('./controllers/orderController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));
    
    // Add New order
    router.post('/order/add', orderController.validate("addOrder"), orderController.addOrder);
    
    router.get('/order/getallorders', orderController.getUserWiseOrders);
    
    router.get('/order/cancel/:id', orderController.CancelOrder);
    
    router.get('/getallorders/:id', orderController.CancelOrder);
}

