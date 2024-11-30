package com.capstone.grocery.service;

import com.capstone.grocery.model.GroceryItem;
import com.capstone.grocery.model.GroceryList;
import com.capstone.grocery.repository.GroceryItemRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class GroceryItemService {

    @Autowired
    private GroceryItemRepository groceryItemRepository;

    @PostConstruct
    public void testConnection() {
        List<GroceryItem> items = groceryItemRepository.findAll();
        System.out.println("Number of items in the database: " + items.size());
    }

    public GroceryItem saveGroceryItem(GroceryItem groceryItem) {
        return groceryItemRepository.save(groceryItem);
    }

    public GroceryItem findGroceryItemById(Long id) {
        return groceryItemRepository.findById(id).orElse(null);
    }

}
