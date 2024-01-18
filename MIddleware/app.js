import express from 'express' 

const app=express(); 
const port=4000;
app.set("view engine",'ejs') 
import web from './router/web.js';  

import student from './router/student.js';
import middle from './middle/middle.js';
app.use(variable);
//calling the Application Level Middlleware

app.use('/',web); 
app.use('/about',web) 
app.use('/event',student) 
 
 
app.listen(port,()=>{
    console.log(`app is Listning at Server local host http://localhost:${port}`);
}) 
