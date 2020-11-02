var cartController = require('./controllers/cartController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));

   
console.log("in routes")
    
    // Add New order
    router.post('/order/add', cartController.validate("addOrder"), cartController.addOrder);
    
    router.get('/order/getallorders', cartController.getUserWiseOrders);
    
    router.get('/order/cancel/:id', cartController.CancelOrder);
    
    router.get('/getallorders/:id', cartController.CancelOrder);
}

