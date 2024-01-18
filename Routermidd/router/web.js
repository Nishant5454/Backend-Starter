import  express  from "express"; 
const router=express.Router(); 
import { page } from "../controll/name.js"; 
router.get('/',page); 
export default router