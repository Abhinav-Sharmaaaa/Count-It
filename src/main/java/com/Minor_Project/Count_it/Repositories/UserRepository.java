package com.Minor_Project.Count_it.Repositories;

import com.Minor_Project.Count_it.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // Define custom query methods here if needed


User findByUsername(String username);
}
