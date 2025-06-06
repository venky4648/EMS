import express from 'express';
import authMiddeleware from "../middleware/authMiddleware.js";
import { addleave,getLeaves } from '../controllers/leavecontroller.js';

const route = express.Router();
route.post("/add", authMiddeleware, addleave);
route.get("/:id",authMiddeleware,getLeaves);

export default route;