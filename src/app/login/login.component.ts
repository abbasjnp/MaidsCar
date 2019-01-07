import {Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={
    email:"",
    password:""
  };
  requestData={};
  public showError:string;

  constructor(private authService:AuthService,
              private router: Router,
              public snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  loginUser(){

    let cipher_text=btoa(this.loginUserData.email+":"+this.loginUserData.password);
    this.requestData={"cipher_text":cipher_text};
    this.authService.loginUser(this.requestData)
                .subscribe(
                  res =>{
                    console.log(res);
                    if(res.success){
                    localStorage.setItem('access_token',res.access_token),
                    this.router.navigate(['/society'])
                    
                    }
                    else{
                      console.log(res.error);
                      this.showError = res.error;
                      this.snackBar.open(this.showError, '', {
                        duration: 4000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right',
                        panelClass: 'back-green'
                      });
                    }
                  },
                  error =>console.log(error)
                )
  }

}
