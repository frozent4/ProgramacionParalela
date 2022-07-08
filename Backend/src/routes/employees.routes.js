
//call routes from express
const { Router } = require("express");
const router = Router();

//import employees.controller
const employeesController = require("../controllers/employees.controller");

//route employees
router.get('/', employeesController.getEmployees);
router.get('/:id', employeesController.getEmployee);
router.post('/', employeesController.createEmployee);
router.put('/:id', employeesController.updateEmployee);
router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;
