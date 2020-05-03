var express = require("express");
var app = express();
var router = express.Router();
var config = require("./config/config.json");
// var tokenValidation = require('./services/custom-modules/auth').validateToken;

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
};

app.use(allowCrossDomain);

let db = require("./services/custom-modules/database/index.js");

// app.use(tokenValidation);
app.use(require("body-parser").json());

app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        res.status(400).send({ code: 400, message: "Invalid Input" });
    } else next();
});

app.use("/api", router);

var port = config.port;

var server = app.listen(port, async function() {
    try {
        await db.checkConnection();
        console.log("Server started on port " + port);
    } catch (error) {
        console.log(error.message);
    }
});

server.timeout = 600000;

module.exports = server;