import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AuthGaurdService } from './auth-gaurd.service';


const routes: Routes = [
  {path:'employees', component: EmployeeComponent, canActivate:[AuthGaurdService]},
  {path:'create-employee', component: CreateEmployeeComponent},
  {path:'update-employee/:id', component: UpdateEmployeeComponent},
  {path:'employee-details/:id', component: EmployeeDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {path:'', redirectTo:'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
