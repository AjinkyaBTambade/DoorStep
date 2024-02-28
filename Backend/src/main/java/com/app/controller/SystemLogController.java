package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ICustomerDao;
import com.app.dao.IServiceProviderDao;
import com.app.dao.ISystemLogDao;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;
import com.app.pojos.SystemLog;
import com.app.service.ISystemLogService;

@RestController
@CrossOrigin
public class SystemLogController {

	@Autowired
	private ISystemLogService islservice;

	@Autowired
	private ISystemLogDao isldao;

	@Autowired
	private IServiceProviderDao ispdao;

	@Autowired
	private ICustomerDao icdao;

	@PostMapping("/book")
	public ResponseEntity<?> booking(@RequestBody Map<String, Integer> req)

	{
		System.out.println(req);
		try {
			System.out.println(req.get("customerId"));
			Integer custId = req.get("customerId");
			Integer vendId = req.get("vendorId");
			System.out.println("custId: " + custId + " vendorId " + vendId);
			islservice.generateLog(custId, vendId);
			return new ResponseEntity<>("Booking successfull", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("in catch of booking method!");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	

	@GetMapping("/History/{custId}")
	public ResponseEntity<?> getHistory(@PathVariable int custId)

	{
		//System.out.println(req);
		try {
			//System.out.println(custId);
			//Integer vendId = req.get("vendorId");
			System.out.println("custId: " + custId);
			
			return new ResponseEntity<>(islservice.seeHistory(custId), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("in catch of History method!");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

