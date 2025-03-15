package com.capstone.grocery.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GroceryItemDto {
    private String name;
    private Double price;
    private String store;
}
