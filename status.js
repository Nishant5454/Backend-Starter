const http=require('http');
const fs=require('fs'); 
const server=http.createServer((req,res)=>{
      console.log("server created"); 
      let path='/.render';  
      switch(req.url){
        case '/': 
        path+='/babar2.html'; 
        res.statusCode=302;
        break;
        case '/about-us':
        path+='/babar2.html';
        res.statusCode=202;
        break;  
        default: 
        path+='error/404.html';
        res.statusCode=404;   
        break;


        
      };
      fs.readFile(path,(error,datafile)=>{
        if(error){
            console.log('file error');
        } 
        else{
            fs.end(datafile);
        }
      })

});
  
 
server.listen(3000,'localhost',()=>{

    console.log('done');
});
