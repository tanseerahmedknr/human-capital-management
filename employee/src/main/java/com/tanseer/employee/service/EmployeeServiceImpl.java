package com.tanseer.employee.service;

import com.tanseer.employee.entity.EmployeeEntity;
import com.tanseer.employee.model.Employee;
import com.tanseer.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {


    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    // Need to convert Employee to Employee Entity for storing data in database
    public Employee createEmployee(Employee employee) {

        EmployeeEntity employeeEntity = new EmployeeEntity();

        // BeanUtils is to copy from source to destination
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);

        return null;
    }

    @Override
    public List<Employee> getAllEmployee() {
        List<EmployeeEntity> employeeEntities =
                employeeRepository.findAll();

        // Convert Employee Entity to List of Employees
        List<Employee> employees = employeeEntities.stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmail()))
                .collect(Collectors.toList());

        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setEmail(employee.getEmail());

        employeeRepository.save(employeeEntity);
        return employee;
    }

}
