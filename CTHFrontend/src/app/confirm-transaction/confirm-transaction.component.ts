import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary-details/beneficiary';
import { CreditorService } from '../services/creditor.service';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../transaction/transaction';

@Component({
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.component.html',
  styleUrls: ['./confirm-transaction.component.css']
})
export class ConfirmTransactionComponent implements OnInit {

  constructor(private transactionService: TransactionService, private route: Router,private creditorService:CreditorService) { }

  transactionId!: Number;
  errorMessage!: string;
  transactionSuccess!:boolean;
  transactionDetails!: Transaction;
  confirm?: boolean;

  ngOnInit(): void {
    this.transactionDetails = this.transactionService.getTransactionData();
     this.errorMessage='';
  }
  confirmTransaction(){
    this.confirm = confirm("Are you sure?");
    if(this.confirm) {
      this.transactionService.addTransaction(this.transactionDetails).subscribe({
        next: (data) => {
          this.transactionId = data;
          this.transactionSuccess = true;
          this.errorMessage='';
        },
        error:error => {this.errorMessage = <any>error.error.message
        console.log(this.errorMessage);
        }
      });
      this.transactionService.setTransactionData(new Transaction());
      this.creditorService.setBeneficiaryDetails(new Beneficiary());
    }
  }

  goBack(){
    //window.history.back();
    this.route.navigate(['/transaction'])
    
  }

}
