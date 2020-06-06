var productController = require('./controllers/productController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));

    //app.use(tokenValidate);

    // Get All Products
    router.get('/products', productController.getAllProducts);

    // Get Program Wise Products
    router.get('/products', productController.getProgramWiseProducts);

    // Get Information of Specific Product
    router.get('/products/description/:id', productController.getProductDescription);

    // Add New Products
    router.post('/products', productController.validate("addProduct"), productController.addProduct);

    // Update Product
    router.put('/products', productController.validate("updateProduct"), productController.updateProduct);

    // Delete Products
    router.delete('/products', productController.validate("deleteProduct"), productController.deleteProduct);
}