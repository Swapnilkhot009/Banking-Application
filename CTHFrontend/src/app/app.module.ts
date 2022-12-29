import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { DebitorAccountDetailsComponent } from './debitor-account-details/debitor-account-details.component';
import { CreditorAccountDetailsComponent } from './creditor-account-details/creditor-account-details.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditorService } from './services/creditor.service';
import { BeneficiaryService } from './services/beneficiary.service';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { ConfirmTransactionComponent } from './confirm-transaction/confirm-transaction.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LimitDetailsComponent } from './limit-details/limit-details.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    BeneficiaryDetailsComponent,
    DebitorAccountDetailsComponent,
    CreditorAccountDetailsComponent,
    TransactionComponent,
    HomepageComponent,
    NavComponent,
    ShowTransactionComponent,
    TransactionDetailsComponent,
    ConfirmTransactionComponent,
    LoginComponent,
    CustomerDetailsComponent,
    AccountDetailsComponent,
    LimitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [BeneficiaryService, CreditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
