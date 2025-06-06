
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
export const getLeaves = async (req, res) => {
  try {
    const { id } = req.params;

    // findOne instead of find, because you're expecting a single employee per userId
    const employee = await Employee.findOne({ userId: id });

    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }

    const leaves = await Leaves.find({ employeeId: employee._id });
    res.status(200).json({ success: true, leaves });

  } catch (error) {
    console.error("Error fetching leaves:", error);
    res.status(500).json({ success: false, message: "Server error in fetching leaves" });
  }
};
