var productController = require('./controllers/productController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));

    //app.use(tokenValidate);

    // Get All Products
    router.get('/products/all', productController.getAllProducts);

    // Get Program Wise Products
    router.get('/products/:id', productController.getProgramWiseProducts);

    // Get Information of Specific Product
    router.get('/products/description/:id', productController.getProductDescription);

    // Add New Products
    router.post('/products/add/:id', productController.validate("addProduct"), productController.addProduct);
}