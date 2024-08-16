import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
    this.getEmployees();
      }

  private getEmployees(){
    this.employeesService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    })
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }


  employeeDetails(id: number){
    this.router.navigate(['employee-details',id]);


  }



  deleteEmployee(id: number){
    this.employeesService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();

    })
  }
}
