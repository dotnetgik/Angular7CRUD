import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/EmployeeList';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [{path:'',component:AngularCRUDComponent},
{path:'Edit',component:EmployeeupdateComponent},
{path:'Add',component:EmployeeAddComponent},
{path:'Home',component:AngularCRUDComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
