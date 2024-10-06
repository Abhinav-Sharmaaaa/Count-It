package com.Minor_Project.Count_it.Repository;

import com.Minor_Project.Count_it.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface UserRepository extends JpaRepository<User, Long>{
        User findByUsername(String username);
    }
