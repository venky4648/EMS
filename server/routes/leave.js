import express from 'express';
import authMiddeleware from "../middleware/authMiddleware.js";
import { addleave } from '../controllers/leavecontroller.js';

const route = express.Router();
route.post("/add", authMiddeleware, addleave);

export default route;