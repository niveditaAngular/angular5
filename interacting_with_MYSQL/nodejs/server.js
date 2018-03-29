//import the modules
//required() is the predifine function in ECMA used to import the module
var express = require("express");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");

//create the REST object
var app = express();

//enable the CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//set the JSON as MIME type
app.use(bodyparser.json());

//implement the security to read post parameters
app.use(bodyparser.urlencoded({
    "extended" : false
}));

//create the connection object
var connection = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "root",
    database : "angular5",
    port : 3030
});

//connect to database
connection.connect();


//create the Rest API
app.post("/login",function(req,res){
    //read the username
    var uname = req.body.uname;
    //read the password
    var upwd = req.body.upwd;

    //compare with the database
    connection.query("select * from login_details where uname='"+uname+"' and upwd='"+upwd+"'",
        function(err,recordsArray,fields){
            if(recordsArray.length>0){
                var token = jwt.encode({'uname':uname,'upwd':upwd},'hr@nareshit.in');
                res.send({"login":"success","token":token});
            }else{
                res.send({"login":"fail"});
            }
        });
});

//Assign the port no.
app.listen(8083);
console.log("Server Listening the Port No.8083");