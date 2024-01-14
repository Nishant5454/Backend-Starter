import express from 'express'
const router=express.Router()
import { home } from "../control/home.js";
import { about } from "../control/about.js";
router.get('/',home) 
router.get('/about',about)
export default router