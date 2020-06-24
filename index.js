var express = require("express");
var app = express();
var router = express.Router();
var tokenValidation = require('./services/custom-modules/auth').validateToken;

// enabling CORS
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

//  Connect all our routes to our application
let db = require("./services/custom-modules/database/index.js");
require("./services/users-service/routes.js")(app, router);
require("./services/subscription-services/routes.js")(app, router);
require("./services/products-service/routes.js")(app, router);
require("./services/programs-service/routes.js")(app, router);

// middleware functions
app.use(tokenValidation);
app.use(require("body-parser").json({ limit: '50mb', extended: true }));

app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        res.status(400).send({ code: 400, message: "Invalid Input" });
    } else next();
});

// serving frontend
router.get('*', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/public/' });
});
app.use(express.static(__dirname + '/public'));

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