package com.app.service;

import com.app.dto.CustomerDTO;
import com.app.exception.AppException;
import com.app.pojos.Customer;

public interface ICustomerService {
	CustomerDTO findCustomerByID(int id);
	Customer registerCustomer(Customer cust) throws AppException;
	CustomerDTO authenticateCustomer(String email,String password) throws AppException;
}
