package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@Table(name = "grocery_list_items")
@NoArgsConstructor
@AllArgsConstructor
public class GroceryListItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "grocery_list_item_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "grocery_list_id")
    private GroceryList groceryList;

    @OneToOne
    @JoinColumn(name = "item_id")
    private GroceryItem groceryItem;

    private int quantity;
}
