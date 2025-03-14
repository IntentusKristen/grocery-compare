package com.capstone.grocery.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateGroceryListItemDto {
    Integer groceryListId;
    Integer productId;
    Integer quantity;
}
