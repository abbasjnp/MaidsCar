import { Component, ViewChild } from '@angular/core';
import { OnInit,AfterViewInit } from "@angular/core";
import { AdminService } from '../../admin.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { Society } from './../../society.interface'
import { SelectionModel } from '@angular/cdk/collections';
import { tap } from 'rxjs/operators';

export interface Food {
    id: string;
    name: string;
}

@Component({
    selector: 'app-society',
    templateUrl: './society.component.html',
    styleUrls: ['./society.component.css']
})

export class SocietyComponent implements OnInit, AfterViewInit {
   // public pageNumber = 1;
    public society;
    public resultData;
    public dataSource;
    public selection;
    public errormsg;
    public pages;
    public totalRecords;
    public inProgress: boolean = false;
    public page =1 ;
    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    constructor(private adminService: AdminService) {
      
    }
    displayedColumns: string[] = ['select', 'id', 'name', 'area', 'city', 'state', 'pincode', 'total_towers', 'actions'];

   
    
    ngOnInit(){
        
        this.getSocietyList();
    }

    getSocietyList() {
        
        this.adminService.getSociety(
            this.page,
            res => {
                const resultArray = res.data;
                this.totalRecords = res.count;
                this.dataSource = new MatTableDataSource<any>(resultArray);
            }
        )
        const initialSelection = [];
        const allowMultiSelect = true;
        this.selection = new SelectionModel<Society[]>(allowMultiSelect, initialSelection);
    }
    ngAfterViewInit() { 
        
        this.paginator.page
            .pipe(
                tap(() => {
                    console.log(this.paginator.pageIndex);
                    this.page = this.paginator.pageIndex+1
                    this.getSocietyList();
                    
                })
            ).subscribe()
          }



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
   





    foods: Food[] = [
        { id: '1', name: 'SocietyName' },
        { id: '2', name: 'SectorArea' },
        { id: '3', name: 'State' }
    ]

}