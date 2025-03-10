package com.capstone.grocery.repository;

import com.capstone.grocery.model.GroceryList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroceryListRepository extends JpaRepository<GroceryList, Integer> {
    List<GroceryList> findAllByUser_Id(Integer userId);
}