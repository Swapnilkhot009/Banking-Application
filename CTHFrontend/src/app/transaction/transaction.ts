import { Creditor } from "../creditor-account-details/creditor";
import { Debitor } from "../debitor-account-details/debitor";

export class Transaction{
    transactionReferenceNumber!:number
    amount?:number
    customerID?:number;
    transactionDate?:Date
    transferType?:String;
    frequency?:String;
    creditorAccountDetails !:Creditor; 
    debitorAccountDetails !:Debitor;
}