const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/public/assets/css"));
app.use(express.static(process.cwd() + "/public/assets/images"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);