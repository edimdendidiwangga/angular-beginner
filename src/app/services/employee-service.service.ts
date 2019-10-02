import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { "id": 1, "name": "Andrew", "age": 30 },
      { "id": 2, "name": "Konti", "age": 32 },
      { "id": 3, "name": "Yuyun", "age": 36 },
    ]
  }
}
