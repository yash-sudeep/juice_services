var programController = require('./controllers/programController');
// var tokenValidation = require('./../custom-modules/auth').validateToken;

var bodyParser = require('body-parser');

module.exports = function(app, router) {

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));

    //app.use(tokenValidate);

    // Get All Programmes
    router.get('/program', programController.getAllProgrammes);

    // Get Information of Specific Program
    router.get('/program/description', programController.getProgramDescription);

    // Add New Program
    router.post('/program', programController.validate("addProgram"), programController.addProgram);

    // Update Program
    router.put('/program', programController.validate("updateProgram"), programController.updateProgram);

    // Delete Program
    router.delete('/program', programController.deleteProgram);
}