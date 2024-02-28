package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ICustomerDao;
import com.app.dao.ISystemLogDao;
import com.app.dto.ServiceProviderDTO;
import com.app.exception.AppException;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;
import com.app.pojos.SystemLog;

@Service
@Transactional

public class ISystemLogServceImpl implements ISystemLogService {

	@Autowired
	ISystemLogDao isldao;
	@Autowired
	ICustomerDao custDao;
	@Autowired
	IServiceProviderService servProviderDao;
	@Override
	public void generateLog(int custId, int vendId) throws AppException{
//		// TODO Auto-generated method stub
		
		Customer cust = custDao.findById(custId).get();
		ServiceProvider vendor=servProviderDao.findById(vendId);
		
		//for cust_service_provider
		cust.getServiceProviders().add(vendor);
		vendor.getUsers().add(cust);
		
		System.out.println(cust.getServiceProviders());
		System.out.println(vendor.getUsers());
		SystemLog log = new SystemLog();
		//set customer, vendor, custEmail, vendEmail
		log.setCust(cust);
		log.setVendor(vendor);
		log.setCustomerEmail(cust.getEmail());
		log.setVendorEmail(vendor.getEmail());
		log.setServiceType(vendor.getServiceType());
		log.setCost(vendor.getServiceCost());
		log.setExperience(vendor.getExperience());

		
		SystemLog isgenerated;
		isgenerated = isldao.save(log);
//		
		if(isgenerated == null )
			throw new AppException("Booking Failed!!!");
		
	}
	
	@Override
	public List<SystemLog> seeHistory(Integer custId) {
		
		// TODO Auto-generated method stub
		return isldao.findByCustId(custId);
	}
	
	
	

	 
}
