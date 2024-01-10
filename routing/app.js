const express=require('express') 
const app=express(); 
app.listen(7000) 
app.get('/student/all',(req,res)=>{
    res.send("All Okay")
}) 
app.get('/:student/delete/:id([0-9]{2})',(req,res)=>{
    console.log(req.params)
    const {id}=req.params
    console.log(id)
    if(id==10){
    res.send("This id belongs to Nishant and cant be deleted");
    }
    res.send(`Student Deleted:${id}`);
})