package com.EmployeeList.spring.services;

import com.EmployeeList.spring.dto.request.AddEmployee;
import com.EmployeeList.spring.employees.Employee;
import com.EmployeeList.spring.employees.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServices {

    @Autowired
    EmployeeRepo employeeRepo;

    public void add(AddEmployee addEmployee){
        Employee employee =new Employee();
        employee.setFirstName(addEmployee.getFirstName());
        employee.setLastName(addEmployee.getLastName());
        employee.setHireDate(addEmployee.getHireDate());
        employee.setAge(addEmployee.getAge());
        employee.setSalary(addEmployee.getSalary());
        employee.setJobTitle(addEmployee.getJobTitle());
        employeeRepo.save(employee);
    }

    public List<Employee> getAll(){
        return employeeRepo.findAll();
    }

    public void editEmp(int id,AddEmployee addEmployee){
        Employee employee=employeeRepo.findById(id).get();
        employee.setFirstName(addEmployee.getFirstName());
        employee.setLastName(addEmployee.getLastName());
        employee.setHireDate(addEmployee.getHireDate());
        employee.setAge(addEmployee.getAge());
        employee.setSalary(addEmployee.getSalary());
        employee.setJobTitle(addEmployee.getJobTitle());
        employeeRepo.save(employee);
    }
}
