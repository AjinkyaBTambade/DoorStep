package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IServiceProviderDao;
import com.app.dto.ResponseDTO;
import com.app.exception.AppException;
import com.app.pojos.ServiceProvider;
import com.app.service.IServiceProviderService;

@RestController
@RequestMapping("/provider")
@CrossOrigin
public class ServiceProviderController {

	@Autowired
	IServiceProviderService isp;

//	@Autowired
//	IServiceProviderDao ispdao;

	//@GetMapping("/service/{serviceType}")
	@GetMapping("/{serviceType}")
	public ResponseEntity<?> getByServiceType (@PathVariable String serviceType)
	{
		List<ServiceProvider> serProList = null;
		System.out.println(serviceType);
		try {
			serProList = isp.findByServiceType(serviceType);
			if(serProList.isEmpty())
				throw new AppException("Bad Request: No such Service type exist!!!");
			return new ResponseEntity<>(serProList,HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	//getbyID
	@GetMapping("/id/{vid}")
	public ResponseEntity<?> getProviderByID(@PathVariable int vid)
	{
		return ResponseEntity.ok(new ResponseDTO<>(isp.findById(vid)));//findbyId hot
	}
	
}
