package com.capstone.grocery.controller;

import com.capstone.grocery.model.GroceryItem;
import com.capstone.grocery.model.GroceryList;
import com.capstone.grocery.model.GroceryListItem;
import com.capstone.grocery.model.User;
import com.capstone.grocery.service.GroceryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class GroceryController {
    private GroceryService groceryService;

    // get all the items in a list using the list id
    @GetMapping("/grocery-items-in-list/{groceryListId}")
    List<GroceryItem> getGroceryItemsInList(@PathVariable Integer groceryListId) {
        List<GroceryListItem> groceryListItems = groceryService.findGroceryListItemsByListId(groceryListId);
        List<Integer> groceryItemsIds = groceryService.getItemIdsFromGroceryListItems(groceryListItems);
        return groceryService.findGroceryItemsByIds(groceryItemsIds);
    }

    @GetMapping("/grocery-list/{id}")
    GroceryList getGroceryList(@PathVariable Integer id) {
        return groceryService.findGroceryListById(id);
    }

    @GetMapping("/grocery-list/{user_id}")
    GroceryList getGroceryListByUserId(@PathVariable Integer user_id) {
        return groceryService.findGroceryListByUserId(user_id);
    }

    @PostMapping("/grocery-item")
    GroceryItem createGroceryItem(@RequestBody GroceryItem groceryItem) {
        return groceryService.createGroceryItem(groceryItem);
    }

    @GetMapping("/grocery-item/{id}")
    GroceryItem getGroceryItemById(@PathVariable Integer id) {
        return groceryService.findGroceryItemById(id);
    }

    @GetMapping("/grocery-items/{name}")
    List<GroceryItem> getGroceryItemByName(@PathVariable String name) {
        return groceryService.findAllGroceryItemsByName(name);
    }

    @PostMapping("/grocery-list")
    GroceryList createGroceryList(@RequestBody GroceryList groceryList) {
        return groceryService.createGroceryList(groceryList);
    }

    @GetMapping("/grocery-list/{id}")
    GroceryList getGroceryListById(@PathVariable Integer id) {
        return groceryService.findGroceryListById(id);
    }

    @PostMapping("/users")
    User createUser(@RequestBody User user) {
        return groceryService.createUser(user);
    }

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Integer id) {
        return groceryService.getUserById(id);
    }



}
