//import the modules
//require() is the predefined function ECMA, used to import the modules
//import "express" module
var express = require("express");

//import "fs" module
var fs = require("fs");

//create the Rest Object
var app = express();

//Enable the CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
		"Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//create the Rest API.
app.get("/static",function(req,res){
	fs.readFile("sample.json",function(err,data){
     res.send(data);
	});
});

//Assign the Port No.
app.listen(8080);
console.log("Server Listening the port no.8080");