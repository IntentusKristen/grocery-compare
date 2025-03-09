package com.capstone.grocery.service;

import com.capstone.grocery.dto.CreateGroceryListItemDto;
import com.capstone.grocery.dto.CreateListDto;
import com.capstone.grocery.dto.ProductsInListDto;
import com.capstone.grocery.dto.StoreListPricesDto;
import com.capstone.grocery.model.*;
import com.capstone.grocery.repository.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GroceryService {

    private final GroceryItemRepository groceryItemRepository;
    private final GroceryStoreRepository groceryStoreRepository;
    private final GroceryListRepository groceryListRepository;
    private final UserRepository userRepository;
    private final GroceryListItemRepository groceryListItemRepository;
    private final ProductRepository productRepository;

    @Autowired
    public GroceryService(GroceryItemRepository groceryItemRepository, GroceryStoreRepository groceryStoreRepository,
                          GroceryListRepository groceryListRepository, UserRepository userRepository,
                          GroceryListItemRepository groceryListItemRepository, ProductRepository productRepository) {
        this.groceryItemRepository = groceryItemRepository;
        this.groceryStoreRepository = groceryStoreRepository;
        this.groceryListRepository = groceryListRepository;
        this.userRepository = userRepository;
        this.groceryListItemRepository = groceryListItemRepository;
        this.productRepository = productRepository;
    }

    @PostConstruct
    public void testConnection() {
        List<GroceryItem> items = groceryItemRepository.findAll();
        System.out.println("Number of items in the database: " + items.size());
    }

    // Product
    public ProductsInListDto getProductsFromGroceryListId(Integer groceryListId) {
        Optional<GroceryList> groceryList = groceryListRepository.findById(groceryListId);
        if (groceryList.isEmpty()) {
            return null;
        }
        String listName = groceryList.get().getName();

        List<GroceryListItem> groceryListItems = groceryListItemRepository.findByGroceryListId(groceryListId);
        List<Product> products = new ArrayList<>();
        for (GroceryListItem item : groceryListItems) {
            products.add(item.getProduct());
        }
        return ProductsInListDto.builder().name(listName).products(products).build();
    }

    public List<Product> findAllProductsByName(String name) {
        return productRepository.findAllByNameIgnoreCase(name);
    }

    // Grocery Item
    public GroceryItem createGroceryItem(GroceryItem groceryItem) {
        return groceryItemRepository.save(groceryItem);
    }

    public GroceryItem findGroceryItemById(Integer id) {
        return groceryItemRepository.findById(id).orElse(null);
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
            Product product = productRepository.findById(dto.getProductId()).orElse(null);
            GroceryListItem groceryListItem = GroceryListItem.builder()
                    .groceryList(groceryList)
                    .product(product)
                    .quantity(dto.getQuantity())
                    .build();
            groceryListItems.add(groceryListItem);
        }
        return groceryListItemRepository.saveAll(groceryListItems);
    }

    public List<GroceryListItem> findGroceryListItemsByListId(Integer groceryListId) {
        return groceryListItemRepository.findByGroceryListId(groceryListId);
    }

    public List<Product> getProductsFromGroceryListItems(List<GroceryListItem> groceryListItems) {
        List<Product> products = new ArrayList<>();
        for (GroceryListItem item : groceryListItems) {
            products.add(item.getProduct());
        }
        return products;
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

    public StoreListPricesDto getGroceryListPricesByStore(Integer groceryListId, Integer groceryStoreId) {
        List<GroceryListItem> groceryListItems = groceryListItemRepository.findByGroceryListId(groceryListId);
        List<GroceryItem> groceryItems = new ArrayList<>();
        for (GroceryListItem groceryListItem : groceryListItems) {
            GroceryItem groceryItem = groceryItemRepository.findByProductIdAndGroceryStore_Id(
                    groceryListItem.getProduct().getId(),
                    groceryStoreId
            );
            groceryItems.add(groceryItem);
        }
        return StoreListPricesDto.builder()
                .listId(groceryListId)
                .groceryItems(groceryItems)
                .build();
    }

    // User
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }
}
