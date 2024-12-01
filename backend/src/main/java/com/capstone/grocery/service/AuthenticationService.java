package com.capstone.grocery.service;

import com.capstone.grocery.dto.LoginCredentials;
import com.capstone.grocery.exception.InvalidUserException;
import com.capstone.grocery.model.User;
import com.capstone.grocery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;

    @Autowired
    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User login(LoginCredentials loginCredentials) {
        String email = loginCredentials.getEmail();
        String password = loginCredentials.getPassword();
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email)
                .filter(u -> u.getPassword().equals(password))
                .orElseThrow(() -> new InvalidUserException("Invalid email or password")));

        if (user.isPresent()) {
            return user.get();
        } else {
            throw new InvalidUserException("Invalid email or password");
        }
    }
}
