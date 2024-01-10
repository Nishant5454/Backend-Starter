const express=require('express');
const app=express(); 
app.listen(4000);  
app.get('/train/:route/:destination',(req,res)=>{
    console.log(req.params); 
    const {route,destination}=req.params; 
    res.send(`Train:${route} and destination:${destination}`)
})