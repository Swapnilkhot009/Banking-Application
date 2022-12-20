package Constants;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.transactionHistory.Exception.ErrorMessage;
import com.transactionHistory.dto.LoginDTO;
import com.transactionHistory.dto.bankInformationDTO;
import com.transactionHistory.dto.beneficiaryDetailDTO;
import com.transactionHistory.dto.creditorAccountDetailsDTO;
import com.transactionHistory.dto.debitorAccountDetailsDTO;
import com.transactionHistory.dto.transactionDTO;
import com.transactionHistory.entity.bankInformation;
import com.transactionHistory.entity.beneficiaryDetail;
import com.transactionHistory.entity.creditorAccountDetails;
import com.transactionHistory.entity.debitorAccountDetails;
import com.transactionHistory.entity.transaction;
import com.transactionHistory.service.loginService;
import com.transactionHistory.show.beneficiaryDetailsShow;
import com.transactionHistory.show.creditorAccountDetailsShow;
import com.transactionHistory.show.debitorAccountDetailsShow;
import com.transactionHistory.show.transactionShow;

public class Constants {
	
	public static bankInformationDTO getBankInformationDTO() {
		bankInformationDTO b = new bankInformationDTO();
		b.setBankCode("Bcode");
		b.setBankName("Bname");
		return b;
	}
	
	public static beneficiaryDetailDTO getBeneficiaryDetailDTO() {
		beneficiaryDetailDTO b = new beneficiaryDetailDTO();
		b.setAddress("Baddress");
		b.setName("BFDname");
		b.setEmail("b@g.com");
		b.setPhone(1999999999);
		b.setBeneficiaryBankInformation(getBankInformationDTO());
		return b;
	}
	
	public static creditorAccountDetailsDTO getCreditorAccountDetailsDTO() {
		creditorAccountDetailsDTO c = new creditorAccountDetailsDTO();
		c.setAccountNo(11111111);
		c.setAccountType("SAVINGS");
		c.setBeneficiaryType("PERSONEL");
		c.setBeneficiaryDetails(getBeneficiaryDetailDTO());
		return c;
	}
	
	public static debitorAccountDetailsDTO getDebitorAccountDetailsDTO() {
		debitorAccountDetailsDTO d =new debitorAccountDetailsDTO();
		d.setAccountName("Daccount");
		d.setAccountNo(18888888);
		d.setAccountType("SAVINGS");
		d.setDebitorBankInformation(getBankInformationDTO());
		return d;
	}
	
	public static transactionDTO getTransactionDTO() {
		transactionDTO t =new transactionDTO();
		t.setAmount(200);
		t.setCreditorAccountDetails(getCreditorAccountDetailsDTO());
		t.setCustomerID(1111111111);
		t.setDebitorAccountDetails(getDebitorAccountDetailsDTO());
		t.setFrequency("ONETIME");
		t.setTransactionDate(LocalDate.now());
		t.setTransferType("INTERNAL");
		t.setTransactionReferenceNumber(1111111111111111L);
		return t;
	}
	
	
	public static bankInformation getBankInformation() {
		bankInformation b = new bankInformation();
		b.setBankCode("Bcode");
		b.setBankName("Bname");
		return b;
	}
	
	public static beneficiaryDetail getBeneficiaryDetail() {
		beneficiaryDetail b = new beneficiaryDetail();
		b.setAddress("Baddress");
		b.setName("BFDname");
		b.setEmail("b@g.com");
		b.setPhone(1999999999);
		b.setBeneficiaryBankInformation(getBankInformation());
		return b;
	}
	
	public static creditorAccountDetails getCreditorAccountDetails() {
		creditorAccountDetails c = new creditorAccountDetails();
		c.setAccountNo(11111111);
		c.setAccountType("SAVINGS");
		c.setBeneficiaryType("PERSONEL");
		c.setBeneficiaryDetails(getBeneficiaryDetail());
		return c;
	}
	
	public static debitorAccountDetails getDebitorAccountDetails() {
		debitorAccountDetails d =new debitorAccountDetails();
		d.setAccountName("Daccount");
		d.setAccountNo(18888888);
		d.setAccountType("SAVINGS");
		d.setDebitorBankInformation(getBankInformation());
		return d;
	}
	
	
	public static transaction getTransaction() {
		transaction t =new transaction();
		t.setAmount(200);
		t.setCreditorAccountDetails(getCreditorAccountDetails());
		t.setCustomerID(1111111111);
		t.setDebitorAccountDetails(getDebitorAccountDetails());
		t.setFrequency("ONETIME");
		t.setTransactionDate(LocalDate.now());
		t.setTransferType("INTERNAL");
		t.setTransactionReferenceNumber(1111111111111111L);
		return t;
	}
	
	public static beneficiaryDetailsShow getBeneficiaryDetailsShow() {
		beneficiaryDetailsShow bs = new beneficiaryDetailsShow();
		bs.setName("bname");
		return bs;
	}
	public static creditorAccountDetailsShow getCreditorAccountDetailsShow() {
		creditorAccountDetailsShow cs = new creditorAccountDetailsShow();
		cs.setAccountNo(11111111);
		cs.setBeneficiaryDetails(getBeneficiaryDetailsShow());
		return cs;
	}
	
	public static LoginDTO getLoginDTO() {
		LoginDTO ld = new LoginDTO();
		ld.setCustomerID(1234567890);
		ld.setPassword("pass@123");
		ld.setUserName("abc");
		return ld;
	} 
	
	public static debitorAccountDetailsShow getDebitorAccountDetailsShow() {
		debitorAccountDetailsShow ds = new debitorAccountDetailsShow();
		ds.setAccountNo(11111111);
		return ds;
	}
	
	public static transactionShow getTransactionShow() {
		transactionShow ts = new transactionShow();
		ts.setAmount(200);
		ts.setCreditorAccountDetails(getCreditorAccountDetailsShow());
		ts.setDebitorAccountDetails(getDebitorAccountDetailsShow());
		ts.setTransactionDate(LocalDate.now());
		ts.setTransactionReferenceNumber(1111111111111111L);
		return ts;
	}
	
	
	
	
	public static ResponseEntity<ErrorMessage> failureResponse() {
		ErrorMessage er = new ErrorMessage();
		er.setErrorCode(HttpStatus.BAD_REQUEST.value());
		er.setMessage("Details for given input not found");
	    return new ResponseEntity<>(er,HttpStatus.BAD_REQUEST);
	}
	
	public static ResponseEntity<Long> getloginRE () {
		return new ResponseEntity<Long>(Constants.getLoginDTO().getCustomerID(),HttpStatus.OK);
	}
	
}
