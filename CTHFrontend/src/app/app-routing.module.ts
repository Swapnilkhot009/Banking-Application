import { transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { ConfirmTransactionComponent } from './confirm-transaction/confirm-transaction.component';
import { CreditorAccountDetailsComponent } from './creditor-account-details/creditor-account-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DebitorAccountDetailsComponent } from './debitor-account-details/debitor-account-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomepageComponent, canActivate:[LoginService]},
  {path:"profile",component:CustomerDetailsComponent, canActivate:[LoginService]},
  {path:"beneficiaryDetails",component:BeneficiaryDetailsComponent, canActivate:[LoginService]},
  {path:"debitorAccountDetails",component:DebitorAccountDetailsComponent, canActivate:[LoginService]},
  {path:"creditorAccountDetails",component:CreditorAccountDetailsComponent, canActivate:[LoginService]},
  {path:"transaction",component:TransactionComponent, canActivate:[LoginService]},
  {path:"showTransaction/:transactionNo",component:ShowTransactionComponent, canActivate:[LoginService]},
  {path:"transactionDetails",component:TransactionDetailsComponent, canActivate:[LoginService]},
  {path:"confirmTransaction",component:ConfirmTransactionComponent, canActivate:[LoginService]},
  {path:"accountDetails",component:AccountDetailsComponent, canActivate:[LoginService]},
  {path:'',redirectTo:'/login',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
