import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/Models/Employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.sass']
})
export class EmployeeAddComponent implements OnInit {
  @Input()  dynamicdata: string = 'Employee Add';
  @Input()  cleardata: boolean = false;

  @Input() objemp :Employee=new Employee();;

constructor() {
 
 }
 
  ngOnInit() {
   this.ResetValues();
  }

  ResetValues(){  
    this.objemp.email="";
    this.objemp.firstname="";
    this.objemp.lastname="";
    this.objemp.gender=0;
  }  
 



  Register(regForm:NgForm){  
    console.log(this.objemp);  
    //this.ResetValues();
  } 

}
