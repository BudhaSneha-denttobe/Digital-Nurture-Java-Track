package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - authenticate()");
        LOGGER.debug("Authorization Header: {}", authHeader);

        // 1. Read and decode the user details from the Header
        String user = getUser(authHeader);

        // 2. Generate the JWT string based on the decoded username
        String jwtToken = generateJwt(user);

        // 3. Create the return map payload matching requirements
        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("token", jwtToken);

        LOGGER.info("END - authenticate()");
        return tokenMap;
    }

    // Decodes the "Basic dXNlcjpwd2Q=" string to extract the username
    private String getUser(String authHeader) {
        LOGGER.debug("START - getUser()");
        
        // Extract the Base64 token string after "Basic " prefix (first 6 characters)
        String encodedCredentials = authHeader.substring(6);
        
        // Decode the string using standard Java 8 Base64 utility
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String credentials = new String(decodedBytes);
        
        // Split username and password at the colon mark (e.g. user:pwd -> user)
        String user = credentials.split(":")[0];
        
        LOGGER.debug("Extracted User from Header: {}", user);
        LOGGER.debug("END - getUser()");
        return user;
    }

    // Assembles the signed JSON Web Token
    private String generateJwt(String user) {
        LOGGER.debug("START - generateJwt()");
        
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        
        // Set token creation time to current system timestamp
        builder.setIssuedAt(new Date());
        
        // Set expiry calculation to exactly 20 minutes from now (1,200,000 milliseconds)
        builder.setExpiration(new Date((new Date()).getTime() + 1200000));
        
        // Cryptographically sign the token payload via an HS256 algorithm and a custom secret key
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");
        
        String token = builder.compact();
        
        LOGGER.debug("END - generateJwt()");
        return token;
    }
}
