package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "grocery_list_items")
public class GroceryListItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "grocery_list_item_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "grocery_list_id")
    private GroceryList groceryList;

    @OneToOne
    @JoinColumn(name = "item_id")
    private GroceryItem groceryItem;

    private int quantity;
}
