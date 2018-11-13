import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
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

  constructor(private dataservice: EmployeeDataService, private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm') myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempemp: Employee;
  @Input() objemp: Employee = new Employee();

  EditEmployee(regForm: NgForm) {


    this.dataservice.EditEmployee(this.objemp).subscribe(res => {
      alert("Employee updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();

    },
  }

}
