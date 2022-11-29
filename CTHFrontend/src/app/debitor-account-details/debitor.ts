import { BeneficiaryBank } from "../beneficiary-details/bankInformation";

export class Debitor{
    accountNo?:number;
    accountType?:String;
    accountName?:String;
    debitorBankInformation!:BeneficiaryBank;
}