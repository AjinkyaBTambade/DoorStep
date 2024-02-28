package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IServiceProviderDao;
import com.app.dto.ServiceProviderDTO;
import com.app.exception.AppException;
import com.app.pojos.ServiceProvider;

@Service
@Transactional
public class IServiceProviderServiceImpl implements IServiceProviderService {

	@Autowired
	IServiceProviderDao spdao;
	
	@Override
	public List<ServiceProvider> findByServiceType(String serviceType) throws Exception {
		// TODO Auto-generated method stub
		return spdao.findByServiceType(serviceType);
	}

	@Override
	public ServiceProviderDTO getById(int id) {
		ServiceProvider ser;
		try {
			ser = spdao.findById(id).orElseThrow(() -> new AppException("invalid id"));
			ServiceProviderDTO sdto = new ServiceProviderDTO();
		     BeanUtils.copyProperties(ser, sdto, "customer");
		     return sdto;
		} catch (AppException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	     
	}

	@Override
	public ServiceProvider findById(int vendId) {
		return spdao.findById(vendId).get();
	}

	
}
