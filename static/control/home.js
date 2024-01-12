import { join } from "path"; 
const homepage=(req,res)=>{
    res.sendfile((process.cwd(),'view','index.html'))
}
export{homepage}