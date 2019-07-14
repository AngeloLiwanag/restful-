const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('express-flash');
const path = require('path');
const session = require('express-session');

app.use(session({
    secret:"secretkey",
    resave:false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.use(flash());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
require("./server/config/mongoose");
require('./server/models/task');
require('./server/config/routes')(app);

app.listen(8000, function(){
    console.log("listening on port 8000");
});