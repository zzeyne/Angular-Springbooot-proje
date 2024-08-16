import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms'; // Gereksiz, standalone bileşenler için
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule], // FormsModule burada kullanılmalı
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
  constructor(private employeeService: EmployeeService, private router: Router ) { }
  ngOnInit(): void { }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).pipe(
      tap(data => console.log(data)),
      
      // Request tamamlandıktan sonra yapılacak işlemler
      finalize(() => {
        console.log('Request tamamlandı');
        this.goToEmployeeList(); // Listeye yönlendir
      })
    ).subscribe(
      // Hata durumunu ele al
      error => console.log(error)
    );
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
    
  }
}
