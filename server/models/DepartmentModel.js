import mongoose from 'mongoose';

const departmentSchema = mongoose.Schema({
    dep_name: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// Middleware to update `updated_at` before saving
departmentSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

const DepartmentModel = mongoose.model('Department', departmentSchema);
export default DepartmentModel;
