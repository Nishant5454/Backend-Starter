const http=require('http');
const fs=require('fs');
const { error } = require('console');
const _=require('lodash');
const server=http.createServer((req,res)=>{
    console.log('server created');
    //console.log(req.method); 
    //console.log(req.url); 
    //res.setHeader('Content-type','Text/Html'); 
    //res.write('<h1>Hi Nishant </h1>');
    //res.write('<h2>Learning  Engg</h2>') 
   //res.end();
   let num=_.random(0,20);
   console.log(num);
   fs.readFile('./render/babar2.html',(error,datafile)=>{
    if(error){
        console.log("File Error Found");
    }
    else{
        res.end(datafile);
    }

   })
    

});
server.listen(3000,'localhost',()=>{  
    console.log('server is listning');



});

