package com.transactionHistory.service;
import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
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
	@Value("${Not.Found}")
	private String notFound;
	
//	public long newTransaction(@Valid transactionDTO transactionDTO) {
//		transaction e = modelMapper.map(transactionDTO, transaction.class);
//		tRepository.save(e);
//		return 0;
//	}

	public transactionDTO transferHistoryByTransactionId(@Valid long transaction_id) throws NotFoundException {
		transaction e = tRepository.findByTransactionReferenceNumber(transaction_id);
		if(e == null){
			throw new NotFoundException(notFound);
		}
		return modelMapper.map(e, transactionDTO.class) ;
	}

	public Set<transactionShow> transferHistoryByCustomerId(@Valid long customer_id) throws NotFoundException {
		System.out.println("hi");
		Set<transaction> transactionsSet = tRepository.findByCustomerId(customer_id);
		if(transactionsSet.isEmpty()) {
		    
			throw new NotFoundException(notFound);
		}
		
		Set<transactionShow> transactionShowList = new HashSet<>();
	    for (transaction trans : transactionsSet) {
	    	transactionShowList.add(modelMapper.map(trans, transactionShow.class));
		}
	    return transactionShowList;
	}

}
