import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCRUDComponent } from './angular-crud/EmployeeList';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {EmployeeDataService} from '../app/DataService/EmployeeDataService'
@NgModule({
  declarations: [
    AppComponent,
    AngularCRUDComponent,
    EmployeeAddComponent,
    EmployeeupdateComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
