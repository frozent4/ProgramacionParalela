import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
// import sngForm
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
``;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }
  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        form.reset();
        this.getEmployees();
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        // this.resetForm(form);
        this.getEmployees();
        form.reset();
      });
    }
  }
  deleteEmployee(_id: string) {
    const responseUser = confirm('Are you sure?');
    console.log(_id);
    console.log(responseUser);
    if (responseUser) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
      });
    }
  }
  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
  resetEmployeeForm(form: NgForm) {}
}
