package com.transactionHistory.dto;

import java.time.LocalDate;
import java.util.Date;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Range;




public class transactionDTO {

	private int amount;
//	@Indexed(unique = true, background = true)
	@Range(message = "customer ID has to be 10 digits")
	private long customerID;
//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
//	@JsonFormat(pattern = "yyyy/MM/dd")
	private LocalDate transactionDate;
	@Pattern(regexp="INTERNAL|EXTERNAL",message = "transcation type needs to be INTERNAL, EXTERNAL")
	private String transferType;
	private String frequency;
	private long transactionReferenceNumber;
	private creditorAccountDetailsDTO creditorAccountDetails;
	private debitorAccountDetailsDTO debitorAccountDetails;
	public transactionDTO() {
		super();
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public long getCustomerID() {
		return customerID;
	}
	public void setCustomerID(long customerID) {
		this.customerID = customerID;
	}
	public LocalDate getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(LocalDate transactionDate) {
		this.transactionDate = transactionDate;
	}
	public String getTransferType() {
		return transferType;
	}
	public void setTransferType(String transferType) {
		this.transferType = transferType;
	}
	public String getFrequency() {
		return frequency;
	}
	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}
	public long getTransactionReferenceNumber() {
		return transactionReferenceNumber;
	}
	public void setTransactionReferenceNumber(long transactionReferenceNumber) {
		this.transactionReferenceNumber = transactionReferenceNumber;
	}
	public creditorAccountDetailsDTO getCreditorAccountDetails() {
		return creditorAccountDetails;
	}
	public void setCreditorAccountDetails(creditorAccountDetailsDTO creditorAccountDetails) {
		this.creditorAccountDetails = creditorAccountDetails;
	}
	public debitorAccountDetailsDTO getDebitorAccountDetails() {
		return debitorAccountDetails;
	}
	public void setDebitorAccountDetails(debitorAccountDetailsDTO debitorAccountDetails) {
		this.debitorAccountDetails = debitorAccountDetails;
	}
	
}
