package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CustomerDTO;
import com.app.dto.ResponseDTO;
import com.app.exception.AppException;
import com.app.pojos.Customer;
import com.app.service.ICustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

	@Autowired
	ICustomerService icust;
	//find by id
	@GetMapping("/id/{cid}")
	public ResponseEntity<?> getCustomerByID(@PathVariable int cid)
	{
		return ResponseEntity.ok(new ResponseDTO<>(icust.findCustomerByID(cid)));
		
	}
	
	//Customer Registration
	@PostMapping("/register")
	public ResponseEntity<?> registerWithCustomer(@ModelAttribute Customer customer) throws AppException
	{
		try {
			Customer cust = icust.registerCustomer(customer);
			if(cust != null)
				return new ResponseEntity<>(HttpStatus.OK);
			else 
				throw new AppException("Invalid Customer Registration Data!!");
		} catch (RuntimeException e) {
			
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateCustomer(@ModelAttribute Customer customer) throws AppException
	{
		try {
			String email = customer.getEmail();
			String password = customer.getPassword();
			
			CustomerDTO cust = icust.authenticateCustomer(email, password);
			
			if(cust != null)
				return new ResponseEntity<>(cust,HttpStatus.OK);
			else
				throw new AppException("Something went Wrong!!!");
			
		} catch (RuntimeException e) {
			
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
		
	}
}
