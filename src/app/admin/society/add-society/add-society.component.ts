import {Component} from '@angular/core';
import{Society} from './../../../society.interface'
import { SocietyComponent } from '../society.component';
import{AdminService} from './../../../admin.service';
import{Router} from '@angular/router';
import{Location}from '@angular/common'

@Component({
    selector:'add-society-component',
    templateUrl:'./add-society.component.html',
    styleUrls:['./add-society.component.css']
})

export class AddSocietyComponent{
       constructor(
           private adminService:AdminService,
           private router:Router,
           private location: Location)
           {}
           public errormsg;
           public response;
    addSocietyObj:Society = {
        id:null,
        name:'',
        area: '',
        city: '',
        state:'', 
        pincode:null,
        total_towers:null
      };
      submitted:boolean=false;
     
      onSubmit(){
          this.submitted=true;
          this.adminService.addSociety(this.addSocietyObj)
                             .subscribe(res=>{
                                 this.response=res;
                                 console.log(res);
                             },
                             error=>{
                                 this.errormsg=error;
                             })
       
                              
     }
     cancel() {
        this.router.navigate(['/society']);
      }
    
      goBack(): void {
        this.location.back();
      }

    }
