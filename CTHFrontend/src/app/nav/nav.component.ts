import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailsService } from '../services/customer-details.service';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  name!: String;
  errorMessage!: String;

  constructor(private route:Router, private customerService: CustomerDetailsService,private logoutSer:LogoutService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  logout(){
    this.logoutSer.logout();
  }

  getCustomerDetails(){
    this.customerService.getCustomerDetails().subscribe({
      next: (data) => {
        this.name = data.customerName;
      },
      error: error => this.errorMessage = <any>error
    });
  }

}
