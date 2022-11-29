import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { ActivatedRoute, Params, Router, TitleStrategy } from '@angular/router';
import { Transaction } from '../transaction/transaction';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transaction!: Transaction[];
  
  transactionNumber!: number;
  errorMessage!: string;
  showTransactions!: boolean
  a:any = new Date();
  b:any = new Date();
  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void{
    this.route.queryParams.subscribe((queryParams: Params) => {
    this.transactionService.getTransaction(sessionStorage.getItem("cID")??"").subscribe({
      next: (data) => {
        this.transaction = data.sort((val1, val2)=> {
          this.a = val1.transactionDate;
          this.b = val2.transactionDate;
          return this.a-this.b;
        });
        this.showTransactions = true;
        console.log(this.transaction);
    
        
      },
      error:(error) => {
        this.errorMessage = <any>error;
        this.showTransactions = false;
      }
    });
  });
 }

 getTransactionDetails(transactionNo: number): void {
  this.transactionNumber = transactionNo;
  this.router.navigate(['/showTransaction',this.transactionNumber]);
}

}
