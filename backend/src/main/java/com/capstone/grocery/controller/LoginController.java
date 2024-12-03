package com.capstone.grocery.controller;

import com.capstone.grocery.config.UserAuthProvider;
import com.capstone.grocery.dto.LoginDto;
import com.capstone.grocery.dto.RegisterDto;
import com.capstone.grocery.dto.UserDto;
import com.capstone.grocery.exception.InvalidUserException;
import com.capstone.grocery.model.User;
import com.capstone.grocery.service.UserService;
import com.capstone.grocery.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
public class LoginController {

    private final GroceryService groceryService;
    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @Autowired
    public LoginController(GroceryService groceryService, UserService userService, UserAuthProvider userAuthProvider) {
        this.groceryService = groceryService;
        this.userService = userService;
        this.userAuthProvider = userAuthProvider;
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return groceryService.createUser(user);
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Integer id) {
        return groceryService.getUserById(id);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<UserDto> login(@RequestBody LoginDto loginDto) {
        UserDto user = userService.login(loginDto);
        user.setToken(userAuthProvider.createToken(user.getEmail()));
        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody RegisterDto registerDto) {
        UserDto user = userService.register(registerDto);
        user.setToken(userAuthProvider.createToken(user.getEmail()));
        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
    }

    @ExceptionHandler(InvalidUserException.class)
    public ResponseEntity<String> handleInvalidUserException(InvalidUserException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

}
