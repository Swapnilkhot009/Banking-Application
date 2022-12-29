import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimitDetailsService {

  public customerID:any = sessionStorage.getItem("cID");
  constructor(private httpClient: HttpClient) { }

  getLimitDetails():Observable<any> {
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('customerID',this.customerID);
    return this.httpClient.get('http://localhost:3000/transfer-limit/CURRENT', {headers: headers}).pipe(
      tap((data: any) => JSON.stringify(data)),
      catchError(this.handleError));;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(()=> {
      return error.error.message});
  }
}
