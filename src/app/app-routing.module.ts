import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminComponent } from './admin/admin.component';
import{SocietyComponent} from './admin/society/society.component'
import { ResidentsComponent } from './admin/residents/residents.components';
import{ EmployeeComponent } from './admin/employee/employee.component';
import { AddSocietyComponent } from './admin/society/add-society/add-society.component';
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './admin/practice/practice.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'society', component:SocietyComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'residents', component:ResidentsComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'society/add society',component:AddSocietyComponent},
  {path:'admin',component:AdminComponent},
  {path:'practice',component:PracticeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
