import  Express  from "express"; 
const router=Express.Router(); 
import { home } from "../controll/home.js";  
router.get('/',home);
export default router
