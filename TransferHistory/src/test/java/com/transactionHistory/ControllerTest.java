package com.transactionHistory;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.transactionHistory.controller.TransactionController;
import com.transactionHistory.service.TransactionService;
import com.transactionHistory.service.loginService;
import com.transactionHistory.show.transactionShow;

import Constants.Constants;

@WebMvcTest(value=TransactionController.class,excludeAutoConfiguration = {SecurityAutoConfiguration.class})
@ActiveProfiles("Test")
class ControllerTest{
	@Autowired 
	private MockMvc mockMvc;
	
	@MockBean
	private TransactionService ts;

	@MockBean
	private loginService ls;
	
	private Set<transactionShow> tSet; 
	
	@BeforeEach
	void setUp(){
		this.tSet = new HashSet<>();
		this.tSet.add(Constants.getTransactionShow());
		this.tSet.add(Constants.getTransactionShow());
		this.tSet.add(Constants.getTransactionShow());
	}
	@Test
	public void transferHistoryByTransactionIdTest() throws Exception{
		Mockito.when(ts.transferHistoryByTransactionId(Mockito.anyLong()))
		.thenReturn(Constants.getTransactionDTO()); 
		
		mockMvc.perform(get("/transfer-history/{transaction_id}",1111111111111111L))
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(jsonPath("$.amount", is(Constants.getTransaction().getAmount())));	
		
	}
	@Test
	public void transferHistoryByCustomerIdTest() throws Exception{
		Mockito.when(ts.transferHistoryByCustomerId(Mockito.anyLong()))
		.thenReturn(this.tSet);
		mockMvc.perform(get("/transfer-history").queryParam("customer_id", "111111111"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$.size()", is(this.tSet.size())));
	}
	@Test
	public void loginTest() throws Exception{
		Mockito.when(ls.login(Constants.getLoginDTO()))
		.thenReturn(Constants.getLoginDTO().getCustomerID());
		mockMvc.perform(post("/login")
                .content(mapToJson(Constants.getLoginDTO())))
		         .equals(1234567890);
	}
	
	//jackson dependancies
	
	private String mapToJson(Object object) throws JsonProcessingException{
	ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
	return objectMapper.writeValueAsString(object);
	}
	public static String asJsonString(final Object obj) {
	    try {
	        return new ObjectMapper().writeValueAsString(obj);
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}
}