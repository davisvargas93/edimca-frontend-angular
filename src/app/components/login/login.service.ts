import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  validUser(loginBody:any){
    const url = 'http://localhost:8080/api/v1/validUser';
    return this.http.post<any>(url,loginBody);
  }
}
