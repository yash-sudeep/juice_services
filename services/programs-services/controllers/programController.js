var programService = require("./../service/programService");
const { body } = require('express-validator');

module.exports = {
    getAllProgrammes: function(req, res) {
        programService.getAllProgrammes(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
            }
        );
    },
    getProgramDescription: function(req, res) {
        programService.getProgramDescription(req).then(
            (data) => {
                res.status(200).send(data);
            },
            (err) => {
                res.status(400).send({ errorCode: 1, message: "Invalid Input" });
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
    validate: function(name) {
        switch (name) {
            case 'addProgram':
                {
                    return [
                        [
                            body('name', 'Program name doesn\'t exists').exists(),
                            body('description', 'Program description doesn\'t exists').exists(),
                            body('status').exists().isBoolean(),
                            body('price').isNumeric(),
                        ]
                    ]
                }
        }
    },
};