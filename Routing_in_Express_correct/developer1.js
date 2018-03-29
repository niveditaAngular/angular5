var express=require("express");
var router=express.Router();
router.get("/",function(req,res)
{
    res.send({"message":"Welcome to developer1 default get request"});
    router.get("/dev1",function(req,res){
        res.send({"message":"welcome to developer1 dev1 get request"});
    });
})

module.exports=router;
