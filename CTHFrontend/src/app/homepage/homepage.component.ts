import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { CustomerDetailsService } from '../services/customer-details.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  customerId!: string | null;
  errorMessage!: string;
  showTransactions!: boolean;
  required!: boolean;
  invalid!: boolean;
  name!: string;

  constructor(private transactionService: TransactionService, private route: Router,
    private customerService: CustomerDetailsService) {}

  ngOnInit(): void {
    this.showTransactions = false;
    this.getCustomerDetails();
  }

  getTransactions(): void {
    const cID = sessionStorage.getItem("cID")
    console.log(cID);

    if (cID === "") {
      this.required = true;
      this.invalid = false;
    }
    else if (cID?.length !== 10) {
      this.required = false;
      this.invalid = true;
    }
    else {
      this.customerId = cID;
      this.route.navigate(['/transactionDetails']);
    }
  }
  getcid() {
    const cID = sessionStorage.getItem('cID')
    console.log("This is from home" + cID);
  }

  getCustomerDetails() {
    this.customerService.getCustomerDetails().subscribe({
      next: (data) => {
        this.name = data.customerName;
      },
      error: error => this.errorMessage = <any>error
    });
  }


}
