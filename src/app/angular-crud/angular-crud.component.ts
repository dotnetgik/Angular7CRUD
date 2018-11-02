import { Component, OnInit } from '@angular/core';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
@Component({
  selector: 'app-angular-crud',
  templateUrl: './angular-crud.component.html',
  styleUrls: ['./angular-crud.component.sass']
})
export class AngularCRUDComponent implements OnInit {
test:boolean=false; 
  constructor() { }
  sss:EmployeeAddComponent;
  ngOnInit() {
    
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
  ngViewOnInit()
  {
    alert("aaa");
  }
  ClearValues()
    {
    alert("11");
     this.sss=new EmployeeAddComponent();
      this.sss.ResetValues();
    }
}
