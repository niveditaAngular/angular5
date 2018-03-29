//import express
var express=require("express");

//import developer1
var developer1=require("./developer1");

//import developer2
var developer2=require("./developer2");

//create REST Object
var app=express();

//assigne the url pattern to the developer1
app.use("/developer1",developer1);

//assign the url pattern for developer2
app.use("/developer2",developer2);

//create the url default get request
app.get("/",function(req,res){
    res.send({"message":"responce from main default get request"});
});

//create the main get request
app.get("/main",function(req,res){
    res.send({"message":"response from main"});
});

//assign port no
app.listen(8080);
console.log("server listen 8080");