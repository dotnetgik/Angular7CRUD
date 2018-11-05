import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EmployeeDataService } from '../DataService/EmployeeDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/Models/Employee';
@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.sass']
})
export class EmployeeupdateComponent implements OnInit {

  constructor(private dataservice:EmployeeDataService,private route:Router) {
 
  }

  ngOnInit() {
  }

  @Input() reset:boolean = false;
  @ViewChild('regForm') myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempemp:Employee;
  @Input() objemp :Employee=new Employee();



}
