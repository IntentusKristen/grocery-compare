package com.capstone.grocery.controller;

import com.capstone.grocery.dto.CreateListDto;
import com.capstone.grocery.model.GroceryItem;
import com.capstone.grocery.model.GroceryList;
import com.capstone.grocery.model.GroceryListItem;
import com.capstone.grocery.model.GroceryStore;
import com.capstone.grocery.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GroceryController {
    private final GroceryService groceryService;

    @Autowired
    public GroceryController(GroceryService groceryService) {
        this.groceryService = groceryService;
    }

    @GetMapping()
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello World");
    }

    @PostMapping()
    public ResponseEntity<String> postHello() {
        return ResponseEntity.ok("Hello World");
    }

    // get all the items in a list using the list id
    @GetMapping("/grocery-items-in-list/{groceryListId}")
    public List<GroceryItem> getGroceryItemsInList(@PathVariable Integer groceryListId) {
        List<GroceryListItem> groceryListItems = groceryService.findGroceryListItemsByListId(groceryListId);
        List<Integer> groceryItemsIds = groceryService.getItemIdsFromGroceryListItems(groceryListItems);
        return groceryService.findGroceryItemsByIds(groceryItemsIds);
    }

    @GetMapping("/grocery-list/{id}")
    public GroceryList getGroceryList(@PathVariable Integer id) {
        return groceryService.findGroceryListById(id);
    }

//    @GetMapping("/grocery-list/{user_id}")
//    public GroceryList getGroceryListByUserId(@PathVariable Long user_id) {
//        return;
//    }

    @PostMapping("/grocery-item")
    public ResponseEntity<GroceryItem> createGroceryItem(@RequestBody GroceryItem groceryItem) {
//        return groceryService.createGroceryItem(groceryItem);
        return ResponseEntity.ok(groceryService.createGroceryItem(groceryItem));
    }

    @GetMapping("/grocery-list-item/{id}")
    public GroceryItem getGroceryItemById(@PathVariable Integer id) {
        return groceryService.findGroceryItemById(id);
    }

    @GetMapping("/grocery-items/{name}")
    public List<GroceryItem> getGroceryItemByName(@PathVariable String name) {
        return groceryService.findAllGroceryItemsByName(name);
    }

    @GetMapping("/all-grocery-items")
    public List<GroceryItem> getAllGroceryItems(){
        return groceryService.findAllGroceryItems();
    }

    @PostMapping("/grocery-lists")
    public GroceryList createGroceryList(@RequestBody CreateListDto groceryList) {
        return groceryService.createGroceryList(groceryList);
    }

    // TODO: Figure out why this is not working
    @PostMapping("/grocery-list-items")
    public List<GroceryListItem> createGroceryListItem(@RequestBody List<GroceryListItem> groceryListItem) {
        return groceryService.createGroceryListItem(groceryListItem);
    }

    @GetMapping("/grocery-stores")
    public ResponseEntity<List<GroceryStore>> getAllGroceryStores() {
        return ResponseEntity.ok(groceryService.findAllGroceryStores());
    }

//    @GetMapping("/grocery-list/{id}")
//    public GroceryList getGroceryListById(@PathVariable Integer id) {
//        return groceryService.findGroceryListById(id);
//    }

}
