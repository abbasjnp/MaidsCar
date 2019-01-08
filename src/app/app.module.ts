import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{ AdminService } from './admin.service'
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import{ SideMenuComponent } from './admin/sidemenu/sidemenu.component';
import{ SocietyComponent} from './admin/society/society.component';
import{ ResidentsComponent } from './admin/residents/residents.components';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AddSocietyComponent } from './admin/society/add-society/add-society.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HeaderComponent} from './admin/header/header.component';
import { LoginComponent } from './login/login.component'
import {MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
    
        MatCheckboxModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
       } 
       from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator'

import{PracticeComponent}  from './admin/practice/practice.component'
import{SimpleComponent} from './admin/practice2/simple-component'



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SideMenuComponent,
    SocietyComponent,
    ResidentsComponent,
    EmployeeComponent,
    AddSocietyComponent,
    HeaderComponent,
    LoginComponent,
    PracticeComponent,
    SimpleComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule
],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
