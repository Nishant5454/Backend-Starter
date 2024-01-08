const app=require('express'); 
const mat=app(); 
mat.listen(4000); 
mat.get('/',(req,res)=>{
    res.send("Nishant ")
});
mat.get('/laura',(req,res)=>{
    res.send('<h1>Express JS</h1>');
});
mat.get('/about-us',(req,res)=>{
    res.send('<h2>From Bhopa</h2>')
})
mat.get('/love',(req,res)=>{
    res.sendFile('./render/babar2.html',{root:__dirname});
});
mat.get('/about',(req,res)=>{
    res.sendFile('./NPM/about.html',{root:__dirname});
});