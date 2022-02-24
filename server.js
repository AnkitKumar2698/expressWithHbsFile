var HTTP_PORT = process.env.PORT || 8080;

var express = require("express"); 
var app = express();
const path = require('path')
var bodyParser= require('body-parser')
var fs = require('fs')

const hbs = require('hbs')
app.set('views/addMember', path.join(__dirname))
app.set('view engine', 'hbs')
var jsonParser = bodyParser.json()
app.use (express.static('static')); //
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get("/", function (req, res) {
    res.render('addMember')
});
app.get("/", function (req, res) {
    res.render('addMember')
});
app.get("/addMember", function (req, res) {
       res.render('addMember')
});
app.post('/addMember', urlencodedParser, function(req, res){
    var body = req.body;
    var res_body = {
    emp: body.memId,
    name: body.email,
    file: body.certificate
    }
  console.log(body);
});

app.listen (HTTP_PORT, () => {console.log("Express http server listening on:" + HTTP_PORT) });