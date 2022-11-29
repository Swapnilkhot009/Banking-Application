package com.transactionHistory.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CustomerDirectory")
public class Login {
	@Indexed(unique=true)
	private String userName;
	private String password;
	@Indexed(unique=true)
	private long customerID;
	
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String userName, String password, long customerID) {
		super();
		this.userName = userName;
		this.password = password;
		this.setCustomerID(customerID);
	}



	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public long getCustomerID() {
		return customerID;
	}
	public void setCustomerID(long customerID) {
		this.customerID = customerID;
	}

}
