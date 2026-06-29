package com.gvp.orm.MockitoDemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    
    // Create a logger for this class
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);
    
    public static void main(String[] args) {
        
        // ERROR: Something went wrong! (Highest priority)
        logger.error("This is an error message");
        
        // WARN: Something might be wrong (Medium priority)
        logger.warn("This is a warning message");
        
        // INFO: Just letting you know what's happening
        logger.info("This is an info message");
        
        // DEBUG: Detailed info for developers
        logger.debug("This is a debug message");
        
        // TRACE: Very detailed info
        logger.trace("This is a trace message");
        
        System.out.println("\n✅ Logging example completed!");
    }
}
