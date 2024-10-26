package com.Minor_Project.Count_it.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF protection (be cautious in production)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/login").permitAll() // Allow access to the login endpoint
                        .anyRequest().authenticated()); // Require authentication for all other requests
        return http.build();
    }
}
