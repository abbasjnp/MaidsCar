import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators'
import { Society } from './society.interface';
import {Residents} from './residents.interface';
import{Employees} from './employees'



@Injectable({
    providedIn: 'root'
})

export class AdminService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer qKLhQcm6LA5xryeyi7sSSbCaUwDchI'
        })
    };

    private _base = "https://maidsncar.sia.co.in/authentication";
    constructor(private http: HttpClient) { }


    getSociety(options,SuccessCall){

        // return this.http.get(url, options).pipe(
        //     retry(3), // retry a failed request up to 3 times
        //     catchError(this.handleError) // then handle the error
        //   );

          
              this.http.get((this._base+'/socity/?page='+options),this.httpOptions).subscribe(
                    (res:any)=>{
                        SuccessCall(res)
                        console.log(res,"lllllllll")
                    }
             )
            
             
          }
    addSociety(society:Society):Observable<Society>{
        return this.http.post<Society>((this._base+'/socity'),society,this.httpOptions)
                                    .pipe(map((data:any)=>data),
                                        catchError(this.errorHandler))
    }

    
    getResidents():Observable<Residents[]>{
             return this.http.get<Residents[]>((this._base+'/get_residents/'),this.httpOptions)
                            .pipe(map((data:any)=>data.data),
                            retry(3),
                            catchError(this.errorHandler))
              
    }
   

    getEmployees():Observable<Employees[]>{
            return this.http.get<Employees[]>((this._base+'/employee/'),this.httpOptions)
                            .pipe(map((data:any)=>data.data),
                            retry(3),
                            catchError(this.errorHandler));
              
    }

    errorHandler(error:HttpErrorResponse){
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } 
          else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
        return throwError('Something Bad Happened Please try again later !!!')
    }
    
    
}
