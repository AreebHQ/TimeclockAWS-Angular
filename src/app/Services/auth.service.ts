import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

 /* register(username: string, email: string, password: string, firstName: string, lastName: string, role: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      firstName,
      lastName,
      role
    }, httpOptions);
  }*/



  register(formData:FormData): Observable<any>{
    return this.http.post(AUTH_API+'signup',formData);
  }



  imageUpload(formData:FormData): Observable<any>{

    return this.http.post(AUTH_API+'imageUpload',formData);
  }

}
