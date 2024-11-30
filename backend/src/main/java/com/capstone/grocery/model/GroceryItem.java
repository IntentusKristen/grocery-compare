package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "grocery_items")
public class GroceryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "item_id")
    private Integer id;
    private String name;
    private Double price;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private GroceryStore groceryStore;
}
