package com.Minor_Project.Count_it.Services;

import com.Minor_Project.Count_it.Models.User;
import com.Minor_Project.Count_it.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }
}
