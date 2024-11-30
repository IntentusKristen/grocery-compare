package com.capstone.grocery.repository;

import com.capstone.grocery.model.GroceryListItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroceryListItemRepository extends JpaRepository<GroceryListItem, Long> {
    List<GroceryListItem> findByGroceryListId(Long groceryListId);
}