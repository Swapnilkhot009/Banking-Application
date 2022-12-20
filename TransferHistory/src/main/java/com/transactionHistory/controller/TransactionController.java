package com.transactionHistory.controller;

import java.util.Set;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transactionHistory.Exception.NotFoundException;
import com.transactionHistory.dto.transactionDTO;
import com.transactionHistory.service.TransactionService;
import com.transactionHistory.show.transactionShow;

@RestController
public class TransactionController {
	
	@Autowired
	private TransactionService tService;

//	@PostMapping("/create-Transfer")
//	public long createTransfer(@Valid @RequestBody transactionDTO transactionDTO) {
//		long transId = this.tService.newTransaction(transactionDTO);
//		return transId;
//	}
	
	
	@GetMapping("/transfer-history/{transaction_id}")
	public transactionDTO transferHistoryByTransactionId(@Valid @PathVariable("transaction_id")long transaction_id) throws NotFoundException {
		return tService.transferHistoryByTransactionId(transaction_id);
	}
	@GetMapping("/transfer-history")
	public Set<transactionShow> transferHistoryByCustomerId(@Valid @RequestParam("customer_id")long customer_id) throws NotFoundException {
		Set<transactionShow> cusTransactionShow = tService.transferHistoryByCustomerId(customer_id);
		return cusTransactionShow ;
	}

}
