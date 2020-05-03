var express = require('express');
var app = express();
var router = express.Router();
var env = process.env.NODE_ENV || 'local';
var configs = require('./config/' + env + '.json');
console.log(env, configs);
// var tokenValidation = require('./services/custom-modules/auth').validateToken;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
};

app.use(allowCrossDomain);

// app.use(tokenValidation);
app.use(require('body-parser'));

app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).send({ code: 400, message: 'Invalid Input' });
    } else next();
});

app.use('/api', router);

var port = configs.port;

var server = app.listen(port, function() {
    console.log('Server started on port ' + port);
});

server.timeout = 600000;

module.exports = server;