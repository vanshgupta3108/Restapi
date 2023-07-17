const sql=require("mysql2");
    const sqlconnect=sql.createConnection({
        host:"103.211.216.53",
        user:"wealtczo_satyam",
        password:"Satyam#123",
        database: "wealtczo_FinOne", 
       multipleStatements:true
    })
    sqlconnect.connect((err)=>{
        if(!err)
        {
            console.log("database connected");
        }
        else{
            
            console.log("database not connected")
        }
    });
      module.exports=sqlconnect;