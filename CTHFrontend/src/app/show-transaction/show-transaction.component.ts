import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction/transaction';
import { TransactionService } from '../services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {
  transactionDetail!: Transaction;
  errorMessage?: string;
  showTransaction!: boolean;

  

  constructor(private transactionService: TransactionService, private route: ActivatedRoute,private r:Router) { }
  
  ngOnInit(): void {
    this.getTransactionDetails();
  }

  getTransactionDetails(): void {
    this.route.paramMap.subscribe(params => {
    this.transactionService.getTransactionDetails(params.get('transactionNo') ?? "").subscribe({
      next: (data) => {
        this.transactionDetail = data;
        this.showTransaction = true;
        console.log(this.transactionDetail);
        
      },
      error:error => this.errorMessage = <any>error
    });
  });
 }

 goBack() {
  // window.history.back();
  this.r.navigate(['/transactionDetails'])
 }
}
