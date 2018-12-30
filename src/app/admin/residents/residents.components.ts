import{Component,OnInit,ViewChild} from '@angular/core';
import {AdminService} from './../../admin.service';
import{MatTableDataSource,MatPaginator} from '@angular/material'
import { Residents } from './../../residents.interface';

export class Food{
    id:number
    name:string
}

@Component({
    selector:'app-residents',
    templateUrl:'./residents.component.html',
    styleUrls:['/residents.component.css']
})

export class ResidentsComponent{
    public residents;
    public datasource;
    public errormsg;

    colDefs = [
        {
            name:'id',
            displayName:'ID',
            width:'80px'

        },
        {
            name:'name',
            displayName:'Full Name',
            width:'100px'
        },
        {
            name:'mobile',
            displayName:'Mobile',
            width:'100px'
        },
        {
            name:'adults',
            displayName:'Total Family Members',
            width:'170px',
            displayFcn: elem =>elem.adults + ' Adults, ' + elem.kids + ' Kids, ' + elem.infant + ' Infant'
        },
        {
            name:'tower',
            displayName:'Tower',
            width:'100px'
        },
        {
            name:'flat_no',
            displayName:'Flat NO',
            width:'100px'
        },
        {
            name:'flat_type',
            displayName:'Flat Type',
            width:'100px'
        },
        {
            name:'residents_type',
            displayName:'Type',
            width:'100px',
            displayFcn:elem => this.getResidentType(elem.residents_type)
        },
        {
            name:'agreement_start_date',
            displayName:'Aggrement Date',
            width:'200px',
            displayFcn:elem=>elem.agreement_start_date + ' to ' + elem.agreement_end_date
        },
        {
            name: 'owner_name',
            displayName: 'Owner Name',
            width: '100px'
          },
          {
            name: 'owner_number',
            displayName: 'Owner Number',
            width: '120px'
          },
          {
            name: 'adhaar_no',
            displayName: 'ID Proof',
            width: '100px',
            displayFcn:elem =>(elem.adhaar_no && elem.adhaar_no > 0) ? 'Aadhaar Card':''
          },


    ]
    constructor(private adminservice:AdminService){
        
      }
      

   
    ngOnInit() {
       this.getResidentsList();
    }
    getResidentsList(){
        this.adminservice.getResidents()
        .subscribe(data=>{
            this.residents=data;
            this.datasource=new MatTableDataSource<Residents[]>(this.residents);
            this.datasource.paginator=this.paginator;
        },
        error=>this.errormsg=error
        )
    }
    getResidentType(type){
        if(type==='o' || type ==='O'){
            return 'Owner';
        }
        else if(type==='t' ||type==='T'){
            return 'Tenant';
        }
        else{
            return type;
        }
    }
    // displayedColumns:string[] = ['id','name','mobile','adults','kids','infant'];
     @ViewChild(MatPaginator) 
     paginator: MatPaginator;
     displayedColumns = this.colDefs.map(c => c.name);    
     applyFilter(filterValue: string) {
     this.datasource.filter = filterValue.trim().toLowerCase();
      }

    foods:Food[]=[
        {id:1,name:'Full Name'},
        {id:2,name:'Mobile Number'},
        {id:3,name:'Total Family Member'}
    ]

}