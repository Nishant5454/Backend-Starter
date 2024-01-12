import { join } from "path"; 
const homepage=(req,res)=>{
    res.sendfile((process.cwd(),'web','index.html'))
}
export{homepage}