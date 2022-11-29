package com.transactionHistory.service;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.transactionHistory.Exception.NotFoundException;
import com.transactionHistory.dto.transactionDTO;
import com.transactionHistory.entity.transaction;
import com.transactionHistory.registory.TransactionRepository;
import com.transactionHistory.show.transactionShow;

@Service
@PropertySource("classpath:messages.properties")
public class TransactionService {
	@Autowired
	private TransactionRepository tRepository;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private Environment environment;
	public long newTransaction(@Valid transactionDTO transactionDTO) {
		transaction e = modelMapper.map(transactionDTO, transaction.class);
		System.out.println("THis is:"+e.toString());
		tRepository.save(e);
		return 0;
	}

	public transactionDTO transferHistoryByTransactionId(@Valid long transaction_id) throws NotFoundException {
		transaction e = tRepository.findByTransactionReferenceNumber(transaction_id);
		if(e == null){
			throw new NotFoundException(environment.getProperty("Not.Found"));
		}
		System.out.println(e);
		return modelMapper.map(e, transactionDTO.class) ;
	}

	public Set<transactionShow> transferHistoryByCustomerId(@Valid long customer_id) throws NotFoundException {
		Set<transaction> transactionsSet = tRepository.findByCustomerId(customer_id);
		if(transactionsSet.isEmpty()) {
			throw new NotFoundException(environment.getProperty("Not.Found"));
		}
		Set<transactionShow> transactionShowList = new HashSet<>();
	    for (transaction trans : transactionsSet) {
	    	transactionShowList.add(modelMapper.map(trans, transactionShow.class));
		}
	    return transactionShowList;
	}

}
