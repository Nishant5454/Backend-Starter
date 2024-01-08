const express=require("express");
const { keys } = require('lodash');
const mat=express(); 

mat.use(express.json());//MiddleWare Function 
mat.listen(5000);

let users=[ 
    {
        'id':1,
        'name':"Nishabnt"
    }, 
    {
        'id':2,
        'name':"prabhat"
    },
    {
        'id':3,
        'name':"Suraj"
    }

];
mat.get('/users',(req,res)=>{ // ->Get Method
    res.send(users);
});
mat.post('/users',(req,res)=>{ //->Post Method
    console.log(req.body); 
    users=req.body;
    res.json({
message:"Data Recived Sucessfully",
users:req.body
    });
});
//mat.patch('/users',(req,res)=>{ //-> Patch Method
  //  console.log('req body->',req.body); 
    //let dataupdated=req.body; 
    //for(key in dataupdated){
      //  users[key]=dataupdated[key];
    //}
   // req.json({
      //  message:"Data Updated Sucessfully", 
     //   users:req.body
    //})
//}); 
mat.get('/users/:id',(req,res)=>{
    
    console.log(req.params.id);
    res.send("users id recived");
});