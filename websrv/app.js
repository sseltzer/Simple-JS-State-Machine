var express = require('express');
var app = express();
app.use(express.static("../scripts"));
app.listen(3000);