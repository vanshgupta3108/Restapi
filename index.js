// console.log("welcome to react");
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const RouterPath=require("./router");
const app=express();
const port=8000;
app.use(bodyParser.json());
app.use(cors());
app.use("/",RouterPath);
app.use("/api/user",RouterPath);
app.listen(port,()=>console.log("server running on port 8000"));
