var productService = require("./../service/productService");
const { body } = require('express-validator');

module.exports = {
    getAllProducts: function(req, res) {
        productService.getAllProducts(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    getProgramWiseProducts: function(req, res) {
        productService.getProgramWiseProducts(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    getProductDescription: function(req, res) {
        productService.getProductDescription(req).then(
            (data) => {
                res.status(200).send(data);
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
                res.status(400).send({ errorCode: 1, message: err });
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
        }
    },
};