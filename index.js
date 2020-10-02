var express = require("express");
var app = express();
var router = express.Router();
var tokenValidation = require('./services/custom-modules/auth').validateToken;
var cors = require('cors');

app.use(cors())

let db = require("./services/custom-modules/database/index.js");
require("./services/users-service/routes.js")(app, router);

app.use(tokenValidation);
app.use(require("body-parser").json({ limit: '50mb', extended: true }));

app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        res.status(400).send({ code: 400, message: "Invalid Input" });
    } else next();
});

app.use("/api", router);

var port = process.env.PORT || 3000;

var server = app.listen(port, async function() {
    try {
        await db.checkConnection();
        console.log("Server started on port " + port);
    } catch (error) {
        console.log(error);
    }
});

server.timeout = 600000;

module.exports = server;