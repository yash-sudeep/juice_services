var express = require("express");
var app = express();
var router = express.Router();

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

require('./routes.js')(app, router);
app.use('/api', router);

app.listen(8002, function() {
    console.log("Server started on port " + port);
});