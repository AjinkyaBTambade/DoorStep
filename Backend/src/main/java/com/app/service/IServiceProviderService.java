package com.app.service;

import java.util.List;

import com.app.dto.ServiceProviderDTO;
import com.app.pojos.ServiceProvider;

public interface IServiceProviderService {
	List<ServiceProvider> findByServiceType(String serviceType) throws Exception;
	ServiceProviderDTO getById(int id);
	ServiceProvider findById(int vendId);
}
