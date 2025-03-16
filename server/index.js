import express from 'express';
import cors from 'cors';
import authRouter from "./routes/auth.js";
import { connectDB } from './db/db.js';
import departmentRouter from './routes/department.js'

import employeeRouter from './routes/employee.js'   
connectDB()
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRouter);
console.log("Verify API Hit");
app.use('/api/department',departmentRouter);
app.use('/api/employee',employeeRouter);




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});