package com.tanseer.employee.controller;

import com.tanseer.employee.model.Employee;
import com.tanseer.employee.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    // Employee is from model class
    private Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/employees")
    private List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }
}
