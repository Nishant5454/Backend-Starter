import express from 'express' 
const app=express(); 
import web from './router/web.js'
app.set("view engine",'ejs') 

app.use('/',web)
app.use('/about',web)
app.listen(3000); 
