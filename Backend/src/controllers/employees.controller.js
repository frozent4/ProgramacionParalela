//require models/employee.js
const Employee = require("../models/employee");

const employeeController = {};
employeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
employeeController.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    console.log(employee);

    res.json(employee);

};
employeeController.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    console.log(employee);
    await employee.save();
    res.json({ message: "Employee saved" });
};
employeeController.updateEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(employee);
};
employeeController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({ message: "Employee deleted" });
};

//export module employeeController
module.exports = employeeController;
