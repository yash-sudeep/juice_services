var programService = require("./../service/programService");
const { body } = require('express-validator');

module.exports = {
    getAllProgrammes: function(req, res) {
        programService.getAllProgrammes(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    getProgramDescription: function(req, res) {
        programService.getProgramDescription(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    addProgram: function(req, res) {
        programService.addProgram(req).then(
            (data) => {
                res.status(201).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    updateProgram: function(req, res) {
        programService.updateProgram(req).then(
            (data) => {
                res.status(202).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: err });
            }
        );
    },
    deleteProgram: function(req, res) {
        programService.deleteProgram(req).then(
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
            case 'addProgram':
                {
                    return [
                        [
                            body('name', 'Program name doesn\'t exists'),
                            body('description', 'Program description doesn\'t exists'),
                            body('status').isBoolean(),
                            body('price').isNumeric(),
                        ]
                    ]
                }
            case 'updateProgram':
                {
                    return [
                        [
                            body('programId', 'Invalid Program').isNumeric(),
                            body('status', 'Invalid Status').isBoolean(),
                            body('price', 'Invalid Amount').isNumeric(),
                        ]
                    ]
                }
        }
    },
};