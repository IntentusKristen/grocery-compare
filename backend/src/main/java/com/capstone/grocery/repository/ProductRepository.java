package com.capstone.grocery.repository;

import com.capstone.grocery.model.Product;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("SELECT * FROM grocery_database g WHERE LOWER(g.name) LIKE '%' || LOWER(:name) || '%'")
    List<Product> findAllByNameIgnoreCase(@Param("name") String name);

    Product findByName(String name);
}
