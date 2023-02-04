package com.tanseer.employee.controller;

import com.tanseer.employee.model.Employee;
import com.tanseer.employee.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private List<Employee> getAllEmployee() {
        return employeeService.getAllEmployee();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        boolean deleted = false;
        deleted = employeeService.deleteEmployee(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = null;
        employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);

    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,
                                                   @RequestBody Employee employee) {
        employee = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(employee);
    }
}
