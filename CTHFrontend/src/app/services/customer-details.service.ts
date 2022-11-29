import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomerDetails } from '../customer-details/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private httpClient: HttpClient) { }

  getCustomerDetails():Observable<any> {
    return this.httpClient.post('http://localhost:3000/getCustomerDetails', {"customerID":sessionStorage.getItem("cID")}).pipe(
      tap((data: any) => JSON.stringify(data)),
      catchError(this.handleError));;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(()=> {
      return error.error.message});
}
}
