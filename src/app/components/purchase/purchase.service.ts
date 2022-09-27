import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  url:String = 'http://localhost:8080/api/v1/';
  constructor(
    private http: HttpClient
  ) { }

  getPurchaseHeader(){
    return this.http.get<any>(`${this.url}getPurchaseHeader`);
  }
  createPurchaseHeaderDetail(body:any){
    const url = `${this.url}createPurchase`;
    return this.http.post<any>(url,body);
  }
}
