import express from 'express';
import cors from 'cors';
import authRouter from "./routes/auth.js";
import { connectDB } from './db/db.js';
import departmentRouter from './routes/department.js'
connectDB()
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRouter);
console.log("Verify API Hit");
app.use('/api/department',departmentRouter);




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});