import express from 'express'
const router=express.Router();  
import { home} from "../controller/home.js";
import { about } from '../controller/about.js';
router.get('/',home) 
router.get('/about',about)
export default router;