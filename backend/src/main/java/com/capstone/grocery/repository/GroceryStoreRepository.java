package com.capstone.grocery.repository;


import com.capstone.grocery.model.GroceryStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryStoreRepository extends JpaRepository<GroceryStore, Integer> {}