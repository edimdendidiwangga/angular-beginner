import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employeeId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.subscribe(( params: ParamMap ) => {
      let id = parseInt(params.get('id'))
      this.employeeId = id
    });
  }

  gotoPrev() {
    this.router.navigate(['/detail', this.employeeId - 1 ])
  }

  gotoNext() {
    this.router.navigate(['/detail', this.employeeId + 1])
  }

}
