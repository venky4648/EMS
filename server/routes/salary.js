import express from 'express';
import authMiddeleware from "../middleware/authMiddleware.js";

import { addSalary } from '../controllers/salarycontroller.js';

const route= express.Router();
route.post("/add",authMiddeleware,addSalary)


export default route;

