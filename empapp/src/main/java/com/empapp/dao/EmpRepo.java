package com.empapp.dao;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.empapp.entities.Employee;
@Repository
public interface EmpRepo extends CrudRepository <Employee,Integer>{

}