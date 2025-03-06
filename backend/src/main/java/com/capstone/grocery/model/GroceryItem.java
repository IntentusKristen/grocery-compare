package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "grocery_items")
public class GroceryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "item_id")
    private Integer id;

    @Column(name = "product_id")
    private Integer productId;

    private Double price;

    @Column(name = "date", nullable = false, updatable = false)
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private GroceryStore groceryStore;

    @PrePersist
    protected void onCreate() {
        date = LocalDateTime.now();
    }
}
