import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankdetailsService {

  constructor(private http:HttpClient) {}
   getBankDetails(){
    let url= "http://localhost:3000/bank-details"
    return this.http.get(url);
   }
}
