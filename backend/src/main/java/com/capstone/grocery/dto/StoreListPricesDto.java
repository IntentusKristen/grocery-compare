package com.capstone.grocery.dto;

import com.capstone.grocery.model.GroceryItem;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class StoreListPricesDto {
    private Integer listId;
    private Integer storeId;
    private List<GroceryItem> groceryItems;
}
