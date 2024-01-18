import express  from 'express'
const router=express.Router();  // YHA PE APNA MIDDLWARE CALL KRENGE
import{placeholder}  from "../controll/place.js"; 
import { temp } from '../layer/middle.js';
router.use(temp); 

router.get('/about',placeholder);  
router.get('/event',(req,res)=>{
    res.send('event hadled')
})

export default router

