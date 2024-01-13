import express from 'express'
const app=express();  
import web from './router/web.js'
 
app.use('/',web)
app.listen(4000); 
