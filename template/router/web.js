import express from 'express'
const router=express.Router();  
import { home} from "../controller/home.js";
import { page } from '../controller/home.js';
router.get('/',home) 
export default router;