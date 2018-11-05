import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { EmployeedeleteComponent } from './employeedelete/employeedelete.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [{path:'',component:AngularCRUDComponent},
{path:'Edit',component:EmployeeupdateComponent},
{path:'Add',component:EmployeeAddComponent},
{path:'delete',component:EmployeedeleteComponent},
{path:'Home',component:AngularCRUDComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
