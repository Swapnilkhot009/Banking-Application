package com.transactionHistory.entity;

import java.time.LocalDate;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Range;
import org.springframework.data.mongodb.core.mapping.Document;

import com.transactionHistory.dto.creditorAccountDetailsDTO;
import com.transactionHistory.dto.debitorAccountDetailsDTO;

@Document(collection = "transactions")
public class transaction {
	private int amount;
	private String frequency;
	private long customerID;
	private LocalDate transactionDate;
	private String transferType;
	private long transactionReferenceNumber;
	private creditorAccountDetailsDTO creditorAccountDetails;
	private debitorAccountDetailsDTO debitorAccountDetails;
	public transaction() {
		super();
		// TODO Auto-generated constructor stub
	}
	public transaction(int amount, String frequency, long customerID, LocalDate transactionDate, String transferType,
			long transactionReferenceNumber, creditorAccountDetailsDTO creditorAccountDetails,
			debitorAccountDetailsDTO debitorAccountDetails) {
		super();
		this.amount = amount;
		this.frequency = frequency;
		this.customerID = customerID;
		this.transactionDate = transactionDate;
		this.transferType = transferType;
		this.transactionReferenceNumber = transactionReferenceNumber;
		this.creditorAccountDetails = creditorAccountDetails;
		this.debitorAccountDetails = debitorAccountDetails;
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
	@Override
	public String toString() {
		return "transaction [amount=" + amount + ", frequency=" + frequency + ", customerID=" + customerID
				+ ", transactionDate=" + transactionDate + ", transferType=" + transferType
				+ ", transactionReferenceNumber=" + transactionReferenceNumber + ", creditorAccountDetails="
				+ creditorAccountDetails + ", debitorAccountDetails=" + debitorAccountDetails + "]";
	}
	
}
