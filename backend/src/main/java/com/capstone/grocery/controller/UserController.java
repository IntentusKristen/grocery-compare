package com.capstone.grocery.controller;

import com.capstone.grocery.dto.LoginCredentials;
import com.capstone.grocery.exception.InvalidUserException;
import com.capstone.grocery.model.User;
import com.capstone.grocery.service.AuthenticationService;
import com.capstone.grocery.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final GroceryService groceryService;
    private final AuthenticationService authenticationService;

    @Autowired
    public UserController(GroceryService groceryService, AuthenticationService authenticationService1) {
        this.groceryService = groceryService;
        this.authenticationService = authenticationService1;
    }

    @PostMapping()
    public User createUser(@RequestBody User user) {
        return groceryService.createUser(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return groceryService.getUserById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginCredentials loginCredentials) {
        return ResponseEntity.ok(authenticationService.login(loginCredentials));
    }

    @ExceptionHandler(InvalidUserException.class)
    public ResponseEntity<String> handleInvalidUserException(InvalidUserException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

}
