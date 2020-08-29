var productService = require("./../service/productService");
const { body } = require('express-validator');

module.exports = {
    getAllProducts: function(req, res) {
        productService.getAllProducts(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    getProgramWiseProducts: function(req, res) {
        productService.getProgramWiseProducts(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    getProductDescription: function(req, res) {
        productService.getProductDescription(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    addProduct: function(req, res) {
        productService.addProduct(req).then(
            (data) => {
                res.status(201).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    updateProduct: function(req, res) {
        productService.updateProduct(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    deleteProduct: function(req, res) {
        productService.deleteProduct(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    validate: function(name) {
        switch (name) {
            case 'addProduct':
                {
                    return [
                        [
                            body('name', 'name doesn\'t exists'),
                            body('description', 'description doesn\'t exists'),
                            body('advantages', 'Advantages cannot be empty').isArray({ min: 1 }),
                            body('disadvantages', 'Disadvantages cannot be empty').isArray({ min: 1 }),
                            body('ingredients', 'Ingredients cannot be empty').isArray({ min: 1 }),
                            body('status').isBoolean(),
                            body('quantity').optional().isNumeric(),
                            body('mediapath').isString(),
                            body('price').optional().isNumeric(),
                            body('pid').isNumeric()
                        ]
                    ]
                }
            case 'updateProduct':
                {
                    return [
                        [
                            body('productId', 'Invalid Product').isNumeric(),
                            body('status').isBoolean(),
                        ]
                    ]
                }
        }
    },
};