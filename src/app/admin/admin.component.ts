import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  
  updateName(){
    this.name.setValue("Nancy");
  }

  ngOnInit() {
  }

}