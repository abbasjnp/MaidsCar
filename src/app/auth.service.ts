import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl ="https://maidsncar.sia.co.in/authentication/login"
  constructor(private http : HttpClient) { }

  loginUser(user:any){
        return  this.http.post<any>(this._loginUrl,user);
  }
}
 