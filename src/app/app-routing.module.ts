import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './pages/employee-list/employee-list.component'
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component'
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component'


const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'jankrik', redirectTo:'/', pathMatch: 'prefix' },  
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  EmployeeListComponent,
  EmployeeDetailComponent,
  PageNotfoundComponent,  
]
