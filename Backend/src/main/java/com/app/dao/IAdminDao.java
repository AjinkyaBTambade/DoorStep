package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ServiceProvider;

public interface IAdminDao extends JpaRepository<ServiceProvider,Integer> {
	
}
