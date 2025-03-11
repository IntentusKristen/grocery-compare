package com.capstone.grocery.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProductsInListDto {
    private String name;
    private List<ProductInListDto> products;
}
