import { Component, OnInit, ViewChild,ElementRef  } from '@angular/core';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

import {EmployeeDataService} from '../DataService/EmployeeDataService'
import {Employee} from 'src/Models/Employee'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeupdateComponent } from '../employeeupdate/employeeupdate.component';
@Component({
  selector: 'app-angular-crud',
  templateUrl: './angular-crud.component.html',
  styleUrls: ['./angular-crud.component.sass']
})
export class AngularCRUDComponent implements OnInit {

  
  emplist:Employee[];
 dataavailbale:Boolean=false;
 private resetForm:boolean = false
  constructor(private dataservce:EmployeeDataService,private route:Router) {
     
 }

  ngOnInit() {
    this.dataservce.getEmployee().subscribe((tempdate) =>{ 
      this.emplist=tempdate;
if(this.emplist.length>1)
{
  this.dataavailbale=true;
}


    }
      )  
     ,err=>{  
       console.log(err);  
     } 
  }
  deleteconfirmation(){
    if(confirm("Are you sure you want to delete this ?"))
    {
     alert("yes");
    }
    else{
      alert("No");
    }

    
  } 
  
  @ViewChild('regForm') editcomponent: EmployeeupdateComponent
  @ViewChild('regForm') addcomponent: EmployeeAddComponent
  loadAddnew (){
    this.addcomponent.objemp.email=""
     this.addcomponent.objemp.firstname=""
     this.addcomponent.objemp.lastname=""
     this.addcomponent.objemp.id=""
     this.addcomponent.objemp.gender=0
  }
 
  loadnewForm()
  {
    
     this.editcomponent.objemp.email=""
     this.editcomponent.objemp.firstname=""
     this.editcomponent.objemp.lastname=""
     this.editcomponent.objemp.id=""
     this.editcomponent.objemp.gender=0

   }
  
  
}
