package com.capstone.grocery.controller;

import com.capstone.grocery.model.GroceryItem;
import com.capstone.grocery.model.GroceryList;
import com.capstone.grocery.repository.GroceryItemRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

public class GroceryController {
    private final GroceryItemRepository groceryRepository;

    GroceryController(GroceryItemRepository groceryRepository) {
        this.groceryRepository = groceryRepository;
    }

    @PostMapping("/grocery-item")
    GroceryItem createGroceryItem(@RequestBody GroceryItem groceryItem) {
        return groceryRepository.save(groceryItem);
    }

    @GetMapping
    GroceryItem getGroceryItemById(@RequestParam Long id) {
        return groceryRepository.findById(id).orElse(null);
    }
}
