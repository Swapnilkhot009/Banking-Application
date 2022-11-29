package com.transactionHistory.show;

import java.time.LocalDate;

public class transactionShow {
	private int amount;
	private LocalDate transactionDate;
	private creditorAccountDetailsShow creditorAccountDetails;
	private debitorAccountDetailsShow debitorAccountDetails;
	private long transactionReferenceNumber;
	public transactionShow() {
		super();
	}

	public transactionShow(int amount, LocalDate transactionDate, creditorAccountDetailsShow creditorAccountDetails,
			debitorAccountDetailsShow debitorAccountDetails, long transactionReferenceNumber) {
		super();
		this.amount = amount;
		this.transactionDate = transactionDate;
		this.creditorAccountDetails = creditorAccountDetails;
		this.debitorAccountDetails = debitorAccountDetails;
		this.transactionReferenceNumber = transactionReferenceNumber;
	}

	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public LocalDate getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(LocalDate transactionDate) {
		this.transactionDate = transactionDate;
	}
	public creditorAccountDetailsShow getCreditorAccountDetails() {
		return creditorAccountDetails;
	}
	public void setCreditorAccountDetails(creditorAccountDetailsShow creditorAccountDetails) {
		this.creditorAccountDetails = creditorAccountDetails;
	}
	public debitorAccountDetailsShow getDebitorAccountDetails() {
		return debitorAccountDetails;
	}
	public void setDebitorAccountDetails(debitorAccountDetailsShow debitorAccountDetails) {
		this.debitorAccountDetails = debitorAccountDetails;
	}
	
	public long getTransactionReferenceNumber() {
		return transactionReferenceNumber;
	}

	public void setTransactionReferenceNumber(long transactionReferenceNumber) {
		this.transactionReferenceNumber = transactionReferenceNumber;
	}

	@Override
	public String toString() {
		return "transactionDTO [amount=" + amount +", transactionDate="
				+ transactionDate + ", creditorAccountDetails="
				+ creditorAccountDetails.toString() + ", debitorAccountDetails=" + debitorAccountDetails.toString() + "]";
	}
}
