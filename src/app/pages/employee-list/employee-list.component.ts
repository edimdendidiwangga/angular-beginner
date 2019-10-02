import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  public employees = []

  constructor(
    private _employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => {
      // console.log('data', data)
      this.employees = data
    });
  }

  onSelect(employee) {
    this.router.navigate(['/detail', employee.id])
  }
}
