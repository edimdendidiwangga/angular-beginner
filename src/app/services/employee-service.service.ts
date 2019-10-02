import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../models/employees';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = '../../assets/employees.json'
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
  }
}
