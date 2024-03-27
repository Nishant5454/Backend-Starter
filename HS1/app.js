import express from "express"; 
import lodash from "lodash";

const PORT=3000;  
const app=express();
app.use('/link',(req,res)=>{ 
    res.send('<h1>This is HomePage</h1>')
}) 
function countervalue(counter){ 
    var sum=0; 
    for(var i=0;i<=counter;i++){ 
        sum=sum+i;
    }
    return sum;
}
function handlefunction(req,res){  
    console.log(req.headers);
    var counter=req.headers.counter; 
    var answer=countervalue(counter); 
    var output="THE Sum  is"+answer; 
    res.send(output);
}
function createuser(req,res){  
    var name="Nishant"; 
    res.send(name)

}
// app.get('/handle',handlefunction)  
app.post('/post',handlefunction) 





app.use('/cal',(req,res)=>{ 
    var count=0; 
    for(let i=0;i<10;i++){ 
        count+=i;
    } 
    res.send(count)
    
})
app.listen(PORT,()=>{ 
    console.log(`Server is Listning at http://localhost:${PORT}`);
})
