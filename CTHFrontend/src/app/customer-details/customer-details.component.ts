import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../services/customer-details.service';
import { CustomerDetails } from './customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer!: CustomerDetails;
  errorMessage!: string;
  constructor(private customerService:CustomerDetailsService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerService.getCustomerDetails().subscribe({
      next: (data) => {
        this.customer = data;
        console.log(data);
      },
      error: error => this.errorMessage = <any>error
    });
    console.log(this.customer);
  }

}
