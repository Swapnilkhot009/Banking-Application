const express=require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const db=require('./db/conn.js')
//const myReqLogger=require('./Utilities/requestLogger');
const routing=require('./routes/route');
const app=express();
app.use(bodyparser.json());
app.use(cors());
//app.use(myReqLogger);
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept,Autorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});
app.use('/',routing);
const port=process.env.PORT||3000;
app.listen(port,()=>{
  console.log(`App running on port ${port}...`);
});

module.exports=app;
