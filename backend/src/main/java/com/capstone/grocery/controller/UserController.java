package com.capstone.grocery.controller;

import com.capstone.grocery.model.User;
import com.capstone.grocery.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final GroceryService groceryService;

    @Autowired
    public UserController(GroceryService groceryService) {
        this.groceryService = groceryService;
    }

    @PostMapping()
    public User createUser(@RequestBody User user) {
        return groceryService.createUser(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return groceryService.getUserById(id);
    }

}
