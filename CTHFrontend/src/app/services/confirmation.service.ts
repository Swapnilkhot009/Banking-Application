import { Injectable } from '@angular/core';
import { Transaction } from '../transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor() { }
  transaction :Transaction = new Transaction();
  setTransaction(data:Transaction){
    this.transaction = data;
  }
  getTransaction(){
    return this.transaction; 
  }
}
