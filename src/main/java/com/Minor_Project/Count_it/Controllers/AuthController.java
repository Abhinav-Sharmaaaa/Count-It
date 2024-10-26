// src/main/java/com/Minor_Project/Count_it/Controllers/AuthController.java
package com.Minor_Project.Count_it.Controllers;

import com.Minor_Project.Count_it.Models.LoginRequest;
import com.Minor_Project.Count_it.Models.User;
import com.Minor_Project.Count_it.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "https://count-it.onrender.com") // Allow requests from your React app
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );

            // Retrieve user from MongoDB
            User user = userRepository.findByUsername(loginRequest.getUsername());

            if (user != null) {
                return ResponseEntity.ok(user); // Return user details or token
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
