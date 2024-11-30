package com.capstone.grocery.repository;

import com.capstone.grocery.model.GroceryItem;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroceryItemRepository extends JpaRepository<GroceryItem, Long> {
    List<GroceryItem> findAllById(List<Long> ids);

    @Query("SELECT * FROM grocery_database g WHERE LOWER(g.name) = LOWER(:name)")
    List<GroceryItem> findAllByNameCaseInsensitive(@Param("name") String name);
}
