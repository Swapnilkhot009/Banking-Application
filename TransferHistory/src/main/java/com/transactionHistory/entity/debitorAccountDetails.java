package com.transactionHistory.entity;

public class debitorAccountDetails {
	
	
	private int accountNo;
	private String accountType;
	private String accountName;
	private bankInformation debitorBankInformation;
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
	public bankInformation getDebitorBankInformation() {
		return debitorBankInformation;
	}
	public void setDebitorBankInformation(bankInformation debitorBankInformation) {
		this.debitorBankInformation = debitorBankInformation;
	}
	
}
