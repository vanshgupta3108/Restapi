const express=require("express");
const sqlDbconnect=require("./dbconnect");
const Router=express.Router();

Router.get("/api/user",(req,res)=>{
    sqlDbconnect.query("select * from `Dummy Table` ",(err,rows)=>
    {
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});
module.exports=Router;