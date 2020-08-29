var programService = require("./../service/programService");
const { body } = require('express-validator');

module.exports = {
    getAllProgrammes: function(req, res) {
        programService.getAllProgrammes(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    getProgramDescription: function(req, res) {
        programService.getProgramDescription(req).then(
            (data) => {
                res.status(200).send({ errorCode: 0, data: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    addProgram: function(req, res) {
        programService.addProgram(req).then(
            (data) => {
                res.status(201).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    updateProgram: function(req, res) {
        programService.updateProgram(req).then(
            (data) => {
                res.status(202).send({ errorCode: 0, message: data });
            },
            (err) => {
                res.status(err.code).send({ errorCode: 1, message: err.message });
            }
        );
    },
    deleteProgram: function(req, res) {
        programService.deleteProgram(req).then(
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