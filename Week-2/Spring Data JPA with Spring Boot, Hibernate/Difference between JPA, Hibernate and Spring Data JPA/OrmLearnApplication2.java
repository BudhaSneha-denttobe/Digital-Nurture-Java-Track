package com.cognizant.ormlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.EmployeeService;

@SpringBootApplication
public class OrmLearnApplication2 {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static EmployeeService employeeService;

    public static void main(String[] args) {
        LOGGER.info("Starting Application");
        
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        employeeService = context.getBean(EmployeeService.class);
        
        testAddEmployee();
    }

    private static void testAddEmployee() {
        LOGGER.info("Start: Testing addEmployee via Spring Data JPA");
        
        Employee newEmployee = new Employee("John Doe");
        employeeService.addEmployee(newEmployee);
        
        LOGGER.info("Employee Saved Successfully: {}", newEmployee);
        LOGGER.info("End: Testing addEmployee");
    }
}
