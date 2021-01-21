import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService,private  router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
	this.employees=data;
    });
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
      console.log(data);
    })
  }

  updateEmployee(id: number){
    console.log(`-----------`)
    this.router.navigate(['update-employee', id]);
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
}

  //   constructor() { }

//   ngOnInit() {
//     this.employees=[
//       {
//         "id":1,
//         "name":"rajeev",
//         "age":40
//       },
//       {
//         "id":2,
//         "name":"ekta",
//         "age":40
//       },
//       {
//         "id":3,
//         "name":"gunika",
//         "age":15
//       }
//     ];
//   }

// }


