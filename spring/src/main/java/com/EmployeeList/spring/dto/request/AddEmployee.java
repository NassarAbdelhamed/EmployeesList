package com.EmployeeList.spring.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddEmployee {
    private String firstName;
    private String lastName;
    private String jobTitle;
    private Date hireDate;
    private double salary;
    private int age;

}
