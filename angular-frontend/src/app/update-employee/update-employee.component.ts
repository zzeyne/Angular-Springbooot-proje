import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { ActivatedRoute, Router } from "@angular/router";
import { tap, finalize } from "rxjs/operators";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']  
})
export class UpdateEmployeeComponent implements OnInit {

  id: number=0;
  employee: Employee = new Employee();
  
  constructor(
    private employeeService: EmployeeService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).pipe(
      tap(data => {
        this.employee = data;
      }),
      finalize(() => {
        console.log('Request to fetch employee data has completed');
      })
    ).subscribe(
      () => {},
      error => console.log(error)
    );
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.id, this.employee).pipe(
      tap(data => {
        console.log(data);
      }),
      finalize(() => {
        console.log('Update request completed');
        this.goToEmployeeList();  // İşlem tamamlandığında listeye yönlendirme yapılır
      })
    ).subscribe(
      () => {},
      error => console.log(error)
    );
  }
  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }
}
