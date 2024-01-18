import  express  from "express"; 
import{middle} from './middle/middle.js'; 
import { Application } from "../controll/student.js";
import variable from "../middle/middle.js";
const router=express.Router(); 
router.use(variable); 
router.get('/student',Application) 
export default router