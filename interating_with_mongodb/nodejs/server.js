//import the modules
//require( is the predefined function in ECMA used to import the module
//import "express"
var express = require("express");
//import mongodb
var mongodb = require("mongodb");
//create the REST object
var app = express();
//enable the CURS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//create the client
var nareshIT = mongodb.MongoClient;
//craete the rest API
app.get("/mongodb", function(req,res){
    nareshIT.connect("mongodb://localhost:27017/angular5",
        function(err,db){

        db.collection("products").find().toArray(function(err,Array){
            res.send(array);
        });
    });
});
//assign port no
app.listen(8080);
console.log("server listening the port no 8080");