import express from 'express'; 
const router=express.Router(); 
import { homepage} from '../controll/home.js'; 
import { aboutpage } from '../controll/about.js'; 
router.get('/',homepage); 
router.get('/about',aboutpage) 
export default router