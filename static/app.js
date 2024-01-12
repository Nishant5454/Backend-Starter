const express=require('express') 
const app=express();  
import web from '/routes/root.js'; 
app.use('/',web);
app.listen(3000); 
