package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "grocery_lists")
public class GroceryList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "grocery_list_id")
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;
}
