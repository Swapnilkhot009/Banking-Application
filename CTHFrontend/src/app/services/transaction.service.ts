import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Creditor } from '../creditor-account-details/creditor';
import { Debitor } from '../debitor-account-details/debitor';
import { Transaction } from '../transaction/transaction';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  transaction :Transaction = new Transaction();
  setCreditorDetails(data:Creditor){
    this.transaction.creditorAccountDetails = data;
  }
  getCreditorDetails(){
    return this.transaction.creditorAccountDetails;
  }
  setDebitorsDetails(data:Debitor){
    this.transaction.debitorAccountDetails = data;
  }
  setTransactionData(data:Transaction){
    this.transaction = data;
  }
  getDebitorsDetails(){
    return this.transaction.debitorAccountDetails;
  }
  getTransactionData(){
    return this.transaction;
  }
  getTransaction(customer_id: string):Observable<Transaction[]>{
    let url = `http://localhost:8080/transfer-history?customer_id=${customer_id}`;
    return this.httpClient.get<Transaction[]>(url).pipe(
      tap((data: any) => JSON.stringify(data)),
      catchError(this.handleError));
  }

  getTransactionDetails(transactionNo: string):Observable<Transaction>{
    let url = `http://localhost:8080/transfer-history/${transactionNo}`;
    return this.httpClient.get<Transaction[]>(url).pipe(
      tap((data: any) => JSON.stringify(data)),
      catchError(this.handleError)
      );
  }

  addTransaction(transactionData: Transaction):Observable<any> {
    return this.httpClient.post('http://localhost:3000/create-transfer', transactionData).pipe(
      tap((data: any) => JSON.stringify(data)),
      catchError(this.handleError));;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(()=> {
      return error.error.message});
}
}
