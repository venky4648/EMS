import express from 'express';
import authMiddeleware from "../middleware/authMiddleware.js";
import { addEmployee, upload ,getEmployees,getEmployee} from '../controllers/employeecontroller.js';

const route= express.Router();
route.post("/add",authMiddeleware,upload.single("image"),addEmployee)
route.get('/all',authMiddeleware,getEmployees);

route.get('/:id',authMiddeleware,getEmployee)
// route.put('/:id',authMiddeleware,updateDepartment)
// route.delete('/:id',authMiddeleware,deleteDepartment)

export default route;