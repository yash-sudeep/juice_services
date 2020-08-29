var subscriptionService = require("./../service/subscriptionService");
const { body } = require('express-validator');

module.exports = {
    getAllSubscriptions: function(req, res) {
        subscriptionService.getAllSubscriptions(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    addSubscription: function(req, res) {
        subscriptionService.addSubscription(req).then(
            (data) => {
                res.status(201).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    updateSubscription: function(req, res) {
        subscriptionService.updateSubscription(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    deleteSubscription: function(req, res) {
        subscriptionService.deleteSubscription(req).then(
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
            case 'addSubscription':
                {
                    return [
                        [
                            body('programId', 'Invalid Program').isNumeric(),
                            body('package', 'Invalid Package Name').isString(),
                            body('price', 'Invalid Amount').isNumeric(),
                        ]
                    ]
                }
            case 'updateSubscription':
                {
                    return [
                        [
                            body('subscriptionId', 'Invalid Subscription').isNumeric(),
                            body('package', 'Invalid Package Name').isString(),
                            body('price', 'Invalid Amount').isNumeric(),
                        ]
                    ]
                }
        }
    },
};