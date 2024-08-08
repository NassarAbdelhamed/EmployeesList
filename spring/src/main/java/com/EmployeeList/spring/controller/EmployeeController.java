package com.EmployeeList.spring.controller;

import com.EmployeeList.spring.dto.request.AddEmployee;
import com.EmployeeList.spring.employees.Employee;
import com.EmployeeList.spring.services.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/app/employees")
public class EmployeeController {
    @Autowired
    EmployeeServices employeeServices;

    @GetMapping
    public ResponseEntity<?> allEmployees(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                   employeeServices.getAll()
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                   "error :-) can't find employees"
            );
        }
    }
    @PostMapping
    public ResponseEntity<?> addEmp(@RequestBody AddEmployee addEmployee){
        try {
            employeeServices.add(addEmployee);
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    "Added successfully"
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-( can't add employee \n please enter valid data"
            );
        }
    }

    @PutMapping
    public ResponseEntity<?> editEmp(@RequestParam int id,@RequestBody AddEmployee addEmployee){
        try {
            employeeServices.editEmp(id,addEmployee);
            return ResponseEntity.status(HttpStatus.OK).body(
                    "Edit successfully"
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-( can't edit employee \n please enter valid data"
            );
        }

    }
}
