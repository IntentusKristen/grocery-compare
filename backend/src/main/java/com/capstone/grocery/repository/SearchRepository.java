package com.capstone.grocery.repository;

import com.capstone.grocery.model.GroceryItem;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SearchRepository extends JpaRepository<GroceryItem, Integer> {
    @Query("SELECT * FROM grocery_items g WHERE g.productId = :id")
    List<GroceryItem> findByProductId(@Param("id") Integer id);
}
