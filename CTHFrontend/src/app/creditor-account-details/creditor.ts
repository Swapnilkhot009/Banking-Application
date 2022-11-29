import { Beneficiary } from "../beneficiary-details/beneficiary";

export class Creditor{
    accountNo?:number;
    accountType?:String;
    beneficiaryType?:String;
    beneficiaryDetails! : Beneficiary;
}