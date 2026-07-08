package com.cognizant.springlearn.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for stateless REST APIs
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/hello").permitAll() // Anyone can hit /hello
                .requestMatchers("/country", "/countries/**").hasRole("USER") // Only Users can access countries
                .requestMatchers("/authenticate").hasAnyRole("USER", "ADMIN") // Both can access authenticate
                .anyRequest().authenticated()
            )
            .httpBasic(httpBasic -> {}); // Enable HTTP Basic authentication to parse credentials

        return http.build();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        // Define user with password "pwd" encrypted using BCrypt
        UserDetails user = User.withUsername("user")
            .password(passwordEncoder().encode("pwd"))
            .roles("USER")
            .build();

        // Define admin with password "adminpwd"
        UserDetails admin = User.withUsername("admin")
            .password(passwordEncoder().encode("adminpwd"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}