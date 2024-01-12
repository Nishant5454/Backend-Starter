const express=require('express') 
const app=express(); 
app.use('/',(req,res)=>{
    console.log("Listning");
}) 
app.listen(3000); 
