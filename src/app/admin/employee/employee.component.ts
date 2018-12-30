import { Component, OnInit,ViewChild } from '@angular/core';
import{AdminService} from './../../admin.service';
import{MatTableDataSource,MatPaginator} from '@angular/material'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees;
  public dataSource;
  public errormsg;

  constructor(private adminService:AdminService) { }

  colDefs =[
      {
        name:'id',
        displayName:'ID',
        width:'80px'
      },
      {
        name:'name',
        displayName:'NAME',
        width:'200px'
      },
      {
        name:'age',
        displayName:'AGE',
        width:'80px'
      },
      {
        name:'current_address',
        displayName:'CURRENT ADDRESS',
        width:'200px'
      },
      {
        name:'adhaar_no',
        displayName:'AADHAR NO',
        width:'80px'
      },
      {
        name:'police_verify',
        displayName:'POLICE VERIFICATION',
        width:'50px'
      },
      {
        name:'service_name',
        displayName:'Service Provide',
        width:'80px'
      },
      {
        name:'timing',
        displayName:'TIMING',
        width:'80px'
      }

  ]


  ngOnInit() {
    this.getEmployeesList();
  }
  displayedColumns = this.colDefs.map(c => c.name);
  @ViewChild(MatPaginator)
  paginator:MatPaginator;


  getEmployeesList(){
    this.adminService.getEmployees()
    .subscribe(
      data=>{
         this.employees=data;
         this.dataSource= new MatTableDataSource(this.employees) 
         this.dataSource.paginator=this.paginator;
      },
      error=>this.errormsg=error
    )
   
  }
  applyFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
