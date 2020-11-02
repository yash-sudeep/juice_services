var express = require("express");
var app = express();
var router = express.Router();
var cors = require('cors');

app.use(cors());

require('./routes.js')(app, router);
app.use('/api', router);

app.listen(8001, function() {
    console.log("Server started on port " + port);
});