import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  // constructor(private http:HttpClient, private cookie: CookieService) { }
  constructor(private http:HttpClient) { }

  sendCredentials(email:string, password:string): Observable<any>{
    // console.log('',email,password);
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`,body)
    // .pipe(
    //   tap((responseOK:any) => {
    //     const  { tokenSession, data} = responseOK
    //     this.cookie.set('token_service',tokenSession, 4, '/')
    //   })
    // )
  }
}
