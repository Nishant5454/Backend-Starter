import  express  from 'express'
const app=express(); 
const port=4000;  
import web from './router/web.js'  
import student from './router/student.js';
//import { temp } from './layer/middle.js'; 

 
//app.use(temp);
app.set("view engine",'ejs')  
app.use('/',web) 
app.use('/',student)


app.listen(port); 
