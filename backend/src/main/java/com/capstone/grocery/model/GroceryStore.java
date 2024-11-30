package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "stores")
public class GroceryStore {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "store_id")
    private Integer id;
    private String name;
    private String address;
}
