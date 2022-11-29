package com.transactionHistory.dto;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;




public class debitorAccountDetailsDTO {
//	@Indexed(unique = true, background = true)
	@Size(min = 10, max = 10, message = "account number has to be 8 digits")
	private int accountNo;
	@Pattern(regexp="SAVINGS | CURRENT | CHECKING", message = "account type needs to be SAVINGS, CURRENT, CHECKING")
	private String accountType;
	private String accountName;
	private bankInformationDTO debitorBankInformation;
	public int getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getAccountName() {
		return accountName;
	}
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}
	public bankInformationDTO getDebitorBankInformation() {
		return debitorBankInformation;
	}
	public void setDebitorBankInformation(bankInformationDTO debitorBankInformation) {
		this.debitorBankInformation = debitorBankInformation;
	}
		
	
}
