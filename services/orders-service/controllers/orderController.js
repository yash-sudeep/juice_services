var orderService = require("./../service/orderService");
const { body } = require('express-validator');

module.exports = {
    getAllOrdersAdmin: function (req, res) {
        orderService.addOrder(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    addOrder: function (req, res) {
        orderService.addOrder(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    getUserWiseOrders: function (req, res) {
        orderService.getUserWiseOrders(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    CancelOrder: function (req, res) {
        orderService.CancelOrder(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
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