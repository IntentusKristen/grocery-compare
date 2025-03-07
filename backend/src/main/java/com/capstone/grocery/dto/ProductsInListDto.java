package com.capstone.grocery.dto;

import com.capstone.grocery.model.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProductsInListDto {
    private String name;
    private List<Product> products;
}
