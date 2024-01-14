import  express  from "express"; 
const app=express(); 
app.set("view engine",'ejs');  
import web from './routes/web.js' 
app.use('/',web) 
app.listen(5000); 
