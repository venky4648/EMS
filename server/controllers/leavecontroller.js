
import Leaves from "../models/Leaves.js";
import Employee from "../models/Employee.js";

export const addleave = async (req, res) => {
  try {
    const { userId, leaveType, startDate, endDate, reason } = req.body;

    if (!userId || !leaveType || !startDate || !endDate || !reason) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const employee = await Employee.findOne({ userId: userId });
    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }

    const newLeave = new Leaves({
      employeeId: employee._id,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    await newLeave.save();
    res.status(200).json({ success: true, message: "Leave request added successfully" });
  } catch (error) {
    console.error("Error adding leave request:", error);
    res.status(500).json({ success: false, message: "Server error in adding leave request" });
  }
};
