package com.capstone.grocery.repository;

import com.capstone.grocery.model.GroceryList;
import com.capstone.grocery.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryListRepository extends JpaRepository<GroceryList, Integer> {
    GroceryList findByUserId(User userId);
}