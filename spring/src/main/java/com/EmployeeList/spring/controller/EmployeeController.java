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
    public ResponseEntity<?> editEmp(@RequestParam int id,@RequestBody AddEmployee addEmployee) {
        try {
            employeeServices.editEmp(id, addEmployee);
            return ResponseEntity.status(HttpStatus.OK).body(
                    "Edit successfully"
            );
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-( can't edit employee \n please enter valid data"
            );
        }
    }

        @DeleteMapping
        public ResponseEntity<?> removeEmp(@RequestParam int id){
            try {
                employeeServices.remove(id);
                return ResponseEntity.status(HttpStatus.OK).body(
                        "Delete successfully"
                );
            }
            catch (Exception ex){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        "error :-( can't delete employee "
                );
            }
    }
    @GetMapping
    @RequestMapping("/maxSalary")
    public ResponseEntity<?> maxSalary(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    employeeServices.maxSalary()
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-) can't find employees"
            );
        }
    }

    @GetMapping
    @RequestMapping("/minSalary")
    public ResponseEntity<?> minSalary(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    employeeServices.minSalary()
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-) can't find employees"
            );
        }
    }

    @GetMapping
    @RequestMapping("/maxAge")
    public ResponseEntity<?> maxAge(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    employeeServices.maxage()
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-) can't find employees"
            );
        }
    }

    @GetMapping
    @RequestMapping("/minAge")
    public ResponseEntity<?> minage(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    employeeServices.minage()
            );
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "error :-) can't find employees"
            );
        }
    }
}
