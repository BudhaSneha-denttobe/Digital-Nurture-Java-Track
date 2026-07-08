package com.cognizant.springlearn;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DateTestRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(DateTestRunner.class);

    public static void main(String[] args) {
        // Call the displayDate method from our main block
        displayDate();
    }

    public static void displayDate() {
        LOGGER.info("START - displayDate()");
        
        // 1. Initialize the ApplicationContext by loading your XML file
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        
        // 2. Extract the SimpleDateFormat bean from the context
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
        
        try {
            // 3. Parse the target date string
            Date date = format.parse("15/02/2006");
            
            // 4. Print the output out to the console tracker
            System.out.println("Parsed Date: " + date);
            
        } catch (Exception e) {
            LOGGER.error("An error occurred while parsing the date: ", e);
        }
        
        LOGGER.info("END - displayDate()");
    }
}