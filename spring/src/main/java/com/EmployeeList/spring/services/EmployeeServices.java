package com.EmployeeList.spring.services;

import com.EmployeeList.spring.dto.request.AddEmployee;
import com.EmployeeList.spring.employees.Employee;
import com.EmployeeList.spring.employees.EmployeeRepo;
import org.hibernate.validator.internal.constraintvalidators.bv.number.bound.MinValidatorForInteger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public void remove(int id){
        Employee employee =employeeRepo.findById(id).get();
        employeeRepo.delete(employee);
    }
    public List<Employee> maxSalary(){
        List<Employee> employeeList=employeeRepo.findAll();
        double salary= 0;
        for(Employee e:employeeList){
            if(e.getSalary()>salary){salary=e.getSalary();}
        }
        List<Integer> id=new ArrayList<>();
        for(Employee e:employeeList){
            if(e.getSalary()==salary){id.add(e.getId());}
        }
        List<Employee> maxSalaryEmployees=new ArrayList<>();
        for (Integer i :id){
            maxSalaryEmployees.add(employeeRepo.findById(i).get());
        }
        return maxSalaryEmployees;
    }
    public List<Employee> minSalary(){
        List<Employee> employeeList=employeeRepo.findAll();
        double salary= 2147483647;
        for(Employee e:employeeList){
            if(e.getSalary()<salary){salary=e.getSalary();}
        }
        List<Integer> id=new ArrayList<>();
        for(Employee e:employeeList){
            if(e.getSalary()==salary){id.add(e.getId());}
        }
        List<Employee> minSalaryEmployees=new ArrayList<>();
        for (Integer i :id){
            minSalaryEmployees.add(employeeRepo.findById(i).get());
        }
        return minSalaryEmployees;
    }

    public List<Employee> maxage(){
        List<Employee> employeeList=employeeRepo.findAll();
        int age= 0;
        for(Employee e:employeeList){
            if(e.getAge()>age){age=e.getAge();}
        }
        List<Integer> id=new ArrayList<>();
        for(Employee e:employeeList){
            if(e.getAge()==age){id.add(e.getId());}
        }
        List<Employee> maxAgeEmployees=new ArrayList<>();
        for (Integer i :id){
            maxAgeEmployees.add(employeeRepo.findById(i).get());
        }
        return maxAgeEmployees;
    }
    public List<Employee> minage(){
        List<Employee> employeeList=employeeRepo.findAll();
        double age= 200;
        for(Employee e:employeeList){
            if(e.getAge()<age){age=e.getAge();}
        }
        List<Integer> id=new ArrayList<>();
        for(Employee e:employeeList){
            if(e.getAge()==age){id.add(e.getId());}
        }
        List<Employee> minAgeEmployees=new ArrayList<>();
        for (Integer i :id){
            minAgeEmployees.add(employeeRepo.findById(i).get());
        }
        return minAgeEmployees;
    }
}
