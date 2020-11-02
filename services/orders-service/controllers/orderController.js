var orderService = require("./../service/orderService");
const { body } = require('express-validator');

module.exports = {
    getAllOrdersAdmin: function (req, res) {
        orderService.addOrder(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    addOrder: function (req, res) {
        orderService.addOrder(req).then(
            (data) => {
                res.status(201).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    getUserWiseOrders: function (req, res) {
        orderService.getUserWiseOrders(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    cancelOrder: function (req, res) {
        orderService.cancelOrder(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    validate: function (name) {
        if (name === 'addOrder') {
            return [
                [
                    body('status', 'status doesn\'t exists').exists(),
                    body('paymentstatus', 'paymentstatus cannot be empty').exists(),
                    body('mobilenumber', 'mobilenumber cannot be empty').exists(),
                    body('paymentvendor', 'paymentvender cannot be empty').exists(),
                    body('description').exists(),
                    body('cost').exists(),
                    body('items').exists(),
                    body('userid').optional().isNumeric(),
                    body('addressid').exists().isNumeric()
                ]
            ]
        }
    },
};