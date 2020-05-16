var productService = require("./../service/productService");
const body = require('express-validator/check');

module.exports = {
    getAllProducts: function(req, res) {
        productService.getAllProducts(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    getProgramWiseProducts: function(req, res) {
        productService.getProgramWiseProducts(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    getProductDescription: function(req, res) {
        productService.getProductDescription(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    addProduct: function(req, res) {
        productService.addProduct(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    validate: function(name) {
        switch (name) {
            case 'addProduct':
                {
                    return [
                        [
                            body('name').exists(),
                            body('description').exists(),
                            body('advantages').isArray(),
                            body('disadvantages').isArray(),
                            body('ingredients').isArray(),
                            body('status').isBoolean(),
                            body('quantity').isNumeric(),
                            body('mediapath').isString(),
                            body('price').isNumeric(),
                            body('pid').isNumeric()
                        ]
                    ]
                }
        }
    },
};