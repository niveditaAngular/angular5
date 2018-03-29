var express=require("express");
var router=express.Router();
router.post("/",function(req,res)
{
    res.send({"message":"default post request of developer2"});
    router.get("/dev2",function(req,res){
        res.send({"message":"dev2 post request from developer2"});
    });
})

module.exports=router;
