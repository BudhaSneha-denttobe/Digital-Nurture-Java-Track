package com.cognizant.eureka_discovery_server; // or your package name

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer; // ◄ Make sure this import is here

@SpringBootApplication
@EnableEurekaServer // ◄ Add this line here
public class EurekaDiscoveryServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaDiscoveryServerApplication.class, args);
    }
}