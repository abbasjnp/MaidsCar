import {Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={};
  requestData={}

  constructor(private authService:AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(){

    let cipher_text=btoa(this.loginUserData.email+":"+this.loginUserData.password);
    this.requestData={"cipher_text":cipher_text};
    this.authService.loginUser(this.requestData)
                .subscribe(
                  res =>{
                    console.log(res),
                    localStorage.setItem('token',res.token),
                    this.router.navigate(['/society'])

                  },
                  error =>console.log(error)
                )
                

                console.log();
  }

}
