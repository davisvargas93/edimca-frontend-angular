import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:String = 'http://localhost:8080/api/v1/';
  constructor(
    private http: HttpClient
  ) { }

  getProcts(){
    return this.http.get<any>(`${this.url}getProducts`);
  }
  createProct(body:any){
    const url = `${this.url}createProduct`;
    return this.http.post<any>(url,body);
  }
}
