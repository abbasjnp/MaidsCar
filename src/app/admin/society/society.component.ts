import {Component,ViewChild} from '@angular/core';
import{OnInit} from "@angular/core";
import { AdminService } from '../../admin.service';
import{MatPaginator,MatTableDataSource} from '@angular/material';
import{Society} from './../../society.interface'
import { compileNgModule } from '@angular/core/src/render3/jit/module';
import {Observable} from 'rxjs'
import{SelectionModel} from '@angular/cdk/collections';
import{PageEvent} from '@angular/material'
//import { count } from 'rxjs/operators';

export interface Food {
    id: string;
    name: string;
  }

@Component({
    selector :'app-society',
    templateUrl:'./society.component.html',
    styleUrls:['./society.component.css']
})

export class SocietyComponent{
    public pageNumber=1;
    public society=[];
    public dataSource;
    public selection;
    public errormsg;
    public pages;
    public count;
    

    constructor(private adminService:AdminService){  }
     
    ngOnInit(){
        this.getSocietyList();
     }
     getSocietyList(){
        this.adminService.getSociety(this.pageNumber)
        .subscribe(data =>{
             this.society=data['data']; 
             this.pages = data['total_pages'];
             this.count = data ['count']
             console.log(this.pages,this.count);      
             this.dataSource = new MatTableDataSource<Society>(this.society);
             this.dataSource.paginator = this.paginator; 
                           },
                   error=>{
                       this.errormsg=error
                   console.log(this.errormsg)
                   }
           
                  ); 

        //  Code for the selection operation
        const initialSelection = [];
        const allowMultiSelect = true;
        this.selection = new SelectionModel<Society[]>(allowMultiSelect, initialSelection);

     }

     length = this.count;
     pageSize = 10;
     pageIndex = this.pages;
     pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
     pageEvent: PageEvent;

     nextPage(event:any){
                
     }
     

    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['select','id', 'name', 'area', 'city','state','pincode','total_towers','actions'];


     // Begining ---- Event Handling Logic for the Selection Operation
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected == numRows;
      }
      
                        /** Selects all rows if they are not all selected; otherwise clear selection. */
      masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
      } 
     // End......................

     //Filtering code
     applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }

      

    

    
    foods:Food[] = [
        {id:'1',name:'SocietyName'},
        {id:'2',name:'SectorArea'},
        {id:'3',name:'State'}
    ]

}