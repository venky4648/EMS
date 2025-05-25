import salary from "../models/salary.js";

export const addSalary = async (req, res) => {
  try {
    const { employeeId, basicSalary, allowances, deductions, payDate } = req.body;

    if (!basicSalary || isNaN(basicSalary)) {
      return res.status(400).json({ success: false, message: "Invalid or missing basicSalary" });
    }

    const totalSalary =
      parseInt(basicSalary || 0) +
      parseInt(allowances || 0) -
      parseInt(deductions || 0);

    const newSalary = new salary({
      employeeId,
      basicSalary,
      allowances,
      deductions,
      netSalary: totalSalary,
      payDate,
    });

    await newSalary.save();
    res.status(200).json({ success: true, message: "Salary details added successfully" });
  } catch (error) {
    console.error("Error adding salary:", error);
    res.status(500).json({ success: false, message: "Server error in adding salary" });
  }
};
