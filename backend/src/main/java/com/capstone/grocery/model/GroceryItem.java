package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

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
    private Date date;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private GroceryStore groceryStore;
}
