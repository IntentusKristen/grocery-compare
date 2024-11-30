package com.capstone.grocery.service;

import com.capstone.grocery.model.*;
import com.capstone.grocery.repository.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryService {

    @Autowired
    private GroceryItemRepository groceryItemRepository;
    private GroceryStoreRepository groceryStoreRepository;
    private GroceryListRepository groceryListRepository;
    private UserRepository userRepository;
    private GroceryListItemRepository groceryListItemRepository;

    @PostConstruct
    public void testConnection() {
        List<GroceryItem> items = groceryItemRepository.findAll();
        System.out.println("Number of items in the database: " + items.size());
    }

    // Grocery Item
    public GroceryItem createGroceryItem(GroceryItem groceryItem) {
        return groceryItemRepository.save(groceryItem);
    }

    public GroceryItem findGroceryItemById(Long id) {
        return groceryItemRepository.findById(id).orElse(null);
    }

    public List<GroceryItem> findGroceryItemsByIds(List<Long> ids) {
        return groceryItemRepository.findAllById(ids);
    }

    public List<GroceryItem> findAllGroceryItemsByName(String name) {
        return groceryItemRepository.findAllByNameIgnoreCase(name);
    }

    // Grocery List
    public GroceryList createGroceryList(GroceryList groceryList) {
        return groceryListRepository.save(groceryList);
    }

    public GroceryList findGroceryListById(Long id) {
        return groceryListRepository.findById(id).orElse(null);
    }

    // Grocery List Items
    public GroceryListItem createGroceryListItem(GroceryListItem groceryListItem) {
        return groceryListItemRepository.save(groceryListItem);
    }

    public List<GroceryListItem> findGroceryListItemsByListId(Long groceryListId) {
        return groceryListItemRepository.findByGroceryListId(groceryListId);
    }

    public List<Long> getItemIdsFromGroceryListItems(List<GroceryListItem> groceryListItems) {
        List<Long> itemIds = new ArrayList<>();
        for (GroceryListItem item : groceryListItems) {
            itemIds.add(item.getId());
        }
        return itemIds;
    }

    // Grocery Store
    public GroceryStore createGroceryStore(GroceryStore groceryStore) {
        return groceryStoreRepository.save(groceryStore);
    }

    public GroceryStore findGroceryStoreById(Long id) {
        return groceryStoreRepository.findById(id).orElse(null);
    }

    // User
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

}
