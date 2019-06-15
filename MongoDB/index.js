const express= require("express");
const bodyParser= require("body-parser");
const mongo = require("./db/connectionMongo");

const app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routeUsers = require("./routes/users")(app);

mongo.connect(app);

