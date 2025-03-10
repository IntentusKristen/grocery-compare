package com.capstone.grocery.dto;

import com.capstone.grocery.model.Product;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductInListDto {
    Integer productId;
    String name;
    Integer quantity;
}
