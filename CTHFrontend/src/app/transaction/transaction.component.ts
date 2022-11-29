import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from '../services/confirmation.service';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionId!: Number;
  errorMessage!: string;
  transactionSuccess!:boolean;
  transaction!: Transaction;

  constructor(private formBuilder : FormBuilder,private route:Router,private transactionSer:TransactionService) { }
  transactionForm!: FormGroup;

  ngOnInit(): void {
    this.transaction = this.transactionSer.getTransactionData()??new Transaction();
    this.transactionForm = this.formBuilder.group({
      amount : [this.transaction.amount,Validators.required],
      //customerID:[this.transaction.customerID,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      transactionDate:[this.transaction.transactionDate,[Validators.required,this.validateDate]],
      transferType:[this.transaction.transferType,Validators.required],
      frequency:[this.transaction.frequency,Validators.required]
    })
  }
  submit(){
    this.transaction = this.transactionForm.value;
    this.transaction.customerID = parseInt(sessionStorage.getItem("cID")??"")
    this.transaction.creditorAccountDetails = this.transactionSer.getCreditorDetails();
    this.transaction.debitorAccountDetails = this.transactionSer.getDebitorsDetails();
    this.transactionSer.setTransactionData(this.transaction);
    this.route.navigate(['/confirmTransaction']);
  }

  goBack(){
    //window.history.back();
    this.route.navigate(['/debitorAccountDetails']);
  }

  validateDate(transactionDate: FormControl){
    let todayDate = new Date();
    let userDate = new Date(transactionDate.value);
    todayDate.setHours(0,0,0,0);
    userDate.setHours(0,0,0,0);
    if(userDate<todayDate){
      return {dateInvalid: {message: "Past dated transaction not allowed"}}
    }
    else if(userDate>todayDate){
      return {dateInvalid: {message: "Future dated transaction not allowed"}}
    }
    else
      return null;
  }

}
