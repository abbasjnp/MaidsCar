import { Component, OnInit } from '@angular/core';
import{User} from './user'

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topics = ['Angular','React','View'];
  userModel = new User('Rob','rob@test.com',9999999,' ','morning',true);

  onSubmit(){
    console.log(this.userModel);
  }

}
