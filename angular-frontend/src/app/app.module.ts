import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AppRoutingModule, routes } from './app.routes';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    
    EmployeeDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


