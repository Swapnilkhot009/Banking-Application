import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  public accountDetails:any;
  public customerNumber:any;
  errorMessage!: string;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAccountDetails();
  }
  getAccountDetails(){
    this.httpClient.post('http://localhost:3000/account-details',{"customerID":sessionStorage.getItem("cID")}).subscribe({
      next: (data)=>{
        this.accountDetails=data;
        this.errorMessage='';
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }}
    );
  }

}
