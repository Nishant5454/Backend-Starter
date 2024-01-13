const home=(req,res)=>{
    res.send("THis is a homepage") 

} 
const page=(req,res)=>{
    res.send("Query Resolved")
}
export{home} 
export{page}