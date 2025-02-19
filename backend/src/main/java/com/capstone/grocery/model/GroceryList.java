package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "grocery_lists")
public class GroceryList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "grocery_list_id")
    private Integer id;
    private String name;
    private Date date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;
}
