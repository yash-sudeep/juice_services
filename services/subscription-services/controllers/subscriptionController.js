var subscriptionService = require("./../service/subscriptionService");
const { body } = require('express-validator');

module.exports = {
    getAllSubscriptions: function(req, res) {
        subscriptionService.getAllSubscriptions(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    addSubscription: function(req, res) {
        subscriptionService.addSubscription(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    updateSubscription: function(req, res) {
        subscriptionService.updateSubscription(req).then(
            (data) => {
                res.status(202).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    deleteSubscription: function(req, res) {
        subscriptionService.deleteSubscription(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
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