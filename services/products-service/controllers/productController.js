var productService = require("./../service/productService");

module.exports = {
    getAllProducts: function(req, res) {
        productService.getAllProducts(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: 'Invalid Input' });
            }
        );
    },
    getProgramWiseProducts: function(req, res) {
        productService.getProgramWiseProducts(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: 'Invalid Input' });
            }
        );
    },
    getProductDescription: function(req, res) {
        productService.getProductDescription(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: 'Invalid Input' });
            }
        );
    }
}