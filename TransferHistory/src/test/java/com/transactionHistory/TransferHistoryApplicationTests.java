package com.transactionHistory;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.HashSet;
import java.util.Set;

import org.junit.Rule;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.transactionHistory.Exception.InvalidCredentialsException;
import com.transactionHistory.Exception.NotFoundException;
import com.transactionHistory.dto.LoginDTO;
import com.transactionHistory.dto.transactionDTO;
import com.transactionHistory.entity.Login;
import com.transactionHistory.entity.transaction;
import com.transactionHistory.registory.TransactionRepository;
import com.transactionHistory.registory.loginRepository;
import com.transactionHistory.service.TransactionService;
import com.transactionHistory.service.loginService;

import Constants.Constants;


@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
class TransferHistoryApplicationTests{
	@Mock 
	private transactionDTO transactionDTO;
	@Mock
	private LoginDTO loginDTO;
	@Autowired
	private TransactionService ts;
	@MockBean
	private TransactionRepository tr;
	@MockBean
	private loginRepository lr;
	@Autowired
	private  loginService ls;
	
	@Test
	public void transferHistoryByTransactionIdTest() throws NotFoundException {
    Mockito.when(tr.findByTransactionReferenceNumber(1111111111111111L))
    .thenReturn(Constants.getTransaction());
    
    
    Assertions.assertEquals("ONETIME", ts.
    		transferHistoryByTransactionId(1111111111111111L)
    		.getFrequency());
    Assertions.assertEquals("INTERNAL", ts.
    		transferHistoryByTransactionId(1111111111111111L)
    		.getTransferType());
    Assertions.assertEquals(1111111111, ts.
    		transferHistoryByTransactionId(1111111111111111L)
    		.getCustomerID());
    Assertions.assertEquals(200, ts.
    		transferHistoryByTransactionId(1111111111111111L)
    		.getAmount());
	}
	
	@Test()
	public void transferHistoryByTransactionIdTestFail() throws NotFoundException{
		Throwable exception = assertThrows(
	            NotFoundException.class, () -> {
	                ts.transferHistoryByTransactionId(2222222222222222L);
	            }
	    );
	    assertEquals("Details for given input not found", exception.getMessage());
	}
	
//	private String mapToJson(Object object) throws JsonProcessingException{
//		ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
//		return objectMapper.writeValueAsString(object);
//	}
	
	@Test
	public void transferHistoryByCustomerIdTest() throws NotFoundException {
	Set<transaction> transactionsSet= new HashSet<>();	
	transactionsSet.add(Constants.getTransaction());
	transactionsSet.add(Constants.getTransaction());
	Mockito.when(tr.findByCustomerId(111111111))
    .thenReturn(transactionsSet);
     Assertions.assertEquals(2,ts.transferHistoryByCustomerId(111111111).size());
	}
	
	@Test()
	public void transferHistoryByCustomerIdFail() throws NotFoundException{
		Throwable exception = assertThrows(
	            NotFoundException.class, () -> {
	            	ts.transferHistoryByCustomerId(11111111);
	            }
	    );
	    assertEquals("Details for given input not found", exception.getMessage());
	}
	
	@Test
	public void loginTest() throws InvalidCredentialsException{
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setUserName("Test");
		loginDTO.setPassword(new BCryptPasswordEncoder().encode("pass@123"));
		loginDTO.setCustomerID(111111111);
		
		Login login = new Login();
		login.setUserName(loginDTO.getUserName());
		login.setPassword(loginDTO.getPassword());
		login.setCustomerID(loginDTO.getCustomerID());
		Mockito.when(lr.findByUserName(loginDTO.getUserName())).thenReturn(login);
		
		Assertions.assertEquals(111111111, login.getCustomerID());
	}
	
	@Test
	public void loginFail() throws InvalidCredentialsException{
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setUserName("Test");
		loginDTO.setPassword(new BCryptPasswordEncoder().encode("pass@123"));
		loginDTO.setCustomerID(111111111);
		Throwable exception = assertThrows(
				InvalidCredentialsException.class, () -> {
	            	ls.login(loginDTO);
	            }
	    );
	    assertEquals("Wrong username or password", exception.getMessage());
	}
}
