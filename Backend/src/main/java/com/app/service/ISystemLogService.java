package com.app.service;

import java.util.List;

import com.app.exception.AppException;
import com.app.pojos.SystemLog;

public interface ISystemLogService {
	void generateLog(int custId, int vendId) throws AppException; // Integer->int conversion done automatically using Auto-Unboxing
	//void showHistory(int custId,int vendId) throws AppException;

	List<SystemLog> seeHistory(Integer custId);
}
