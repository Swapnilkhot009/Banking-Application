package com.transactionHistory.show;

public class debitorAccountDetailsShow {
	private int accountNo;
	public debitorAccountDetailsShow() {
		super();
	}
	public debitorAccountDetailsShow( int accountNo) {
		super();
		this.accountNo = accountNo;

	}
	public int getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}
	@Override
	public String toString() {
		return "debitorAccountDetailsDTO [accountNo=" + accountNo + "]";
	}
}
