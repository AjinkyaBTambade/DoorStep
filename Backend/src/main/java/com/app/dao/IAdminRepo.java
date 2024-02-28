package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Admin;

public interface IAdminRepo extends JpaRepository<Admin, Integer> {

	public Admin findByemail(String email);
}
