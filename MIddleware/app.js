import express from 'express' 

const app=express(); 
const port=4000;
app.set("view engine",'ejs') 
import web from './router/web.js';  
import variable from './middle/middle.js'; 
app.use(variable);
//calling the Middleware 

app.use('/',web); 
app.use('/about',web)
 
 
app.listen(port,()=>{
    console.log(`app is Listning at Server local host http://localhost:${port}`);
}) 
