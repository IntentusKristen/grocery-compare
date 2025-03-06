package com.capstone.grocery.service;

import com.capstone.grocery.dto.CreateGroceryListItemDto;
import com.capstone.grocery.dto.CreateListDto;
import com.capstone.grocery.model.*;
import com.capstone.grocery.repository.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryService {

    private final GroceryItemRepository groceryItemRepository;
    private final GroceryStoreRepository groceryStoreRepository;
    private final GroceryListRepository groceryListRepository;
    private final UserRepository userRepository;
    private final GroceryListItemRepository groceryListItemRepository;

    @Autowired
    public GroceryService(GroceryItemRepository groceryItemRepository, GroceryStoreRepository groceryStoreRepository,
                          GroceryListRepository groceryListRepository, UserRepository userRepository,
                          GroceryListItemRepository groceryListItemRepository) {
        this.groceryItemRepository = groceryItemRepository;
        this.groceryStoreRepository = groceryStoreRepository;
        this.groceryListRepository = groceryListRepository;
        this.userRepository = userRepository;
        this.groceryListItemRepository = groceryListItemRepository;
    }

    @PostConstruct
    public void testConnection() {
        List<GroceryItem> items = groceryItemRepository.findAll();
        System.out.println("Number of items in the database: " + items.size());
    }

    // Grocery Item
    public GroceryItem createGroceryItem(GroceryItem groceryItem) {
        return groceryItemRepository.save(groceryItem);
    }

    public GroceryItem findGroceryItemById(Integer id) {
        return groceryItemRepository.findById(id).orElse(null);
    }

    public List<GroceryItem> findGroceryItemsByIds(List<Integer> ids) {
        return groceryItemRepository.findAllById(ids);
    }

    public List<GroceryItem> findAllGroceryItemsByName(String name) {
        return groceryItemRepository.findAllByNameIgnoreCase(name);
    }

    public List<GroceryItem> findAllGroceryItems(){
        return groceryItemRepository.findAll();
    }

    // Grocery List
    public GroceryList createGroceryList(CreateListDto createListDto) {
        User user = userRepository.findById(createListDto.getUserId()).orElse(null);
        GroceryList groceryList = GroceryList.builder()
                .name(createListDto.getListName())
                .user(user)
                .build();
        return groceryListRepository.save(groceryList);
    }

    public GroceryList findGroceryListById(Integer id) {
        return groceryListRepository.findById(id).orElse(null);
    }

    public List<GroceryList> findGroceryListsByUserId(Integer userId) {
        return groceryListRepository.findAllByUser_Id(userId);
    }

    // Grocery List Items
    public List<GroceryListItem> createGroceryListItem(List<CreateGroceryListItemDto> groceryListItemDtos) {
        List<GroceryListItem> groceryListItems = new ArrayList<>();
        for (CreateGroceryListItemDto dto : groceryListItemDtos) {
            GroceryList groceryList = groceryListRepository.findById(dto.getGroceryListId()).orElse(null);
            GroceryItem groceryItem = groceryItemRepository.findById(dto.getItemId()).orElse(null);
            GroceryListItem groceryListItem = GroceryListItem.builder()
                    .groceryList(groceryList)
                    .groceryItem(groceryItem)
                    .quantity(dto.getQuantity())
                    .build();
            groceryListItems.add(groceryListItem);
        }
        return groceryListItemRepository.saveAll(groceryListItems);
    }

    public List<GroceryListItem> findGroceryListItemsByListId(Integer groceryListId) {
        return groceryListItemRepository.findByGroceryListId(groceryListId);
    }

    public List<Integer> getItemIdsFromGroceryListItems(List<GroceryListItem> groceryListItems) {
        List<Integer> itemIds = new ArrayList<>();
        for (GroceryListItem item : groceryListItems) {
            itemIds.add(item.getId());
        }
        return itemIds;
    }

    // Grocery Store
    public GroceryStore createGroceryStore(GroceryStore groceryStore) {
        return groceryStoreRepository.save(groceryStore);
    }

    public List<GroceryStore> findAllGroceryStores() {
        return groceryStoreRepository.findAll();
    }

    public GroceryStore findGroceryStoreById(Integer id) {
        return groceryStoreRepository.findById(id).orElse(null);
    }

    // User
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

}
