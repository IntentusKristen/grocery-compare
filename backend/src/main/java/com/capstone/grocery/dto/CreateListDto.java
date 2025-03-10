package com.capstone.grocery.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateListDto {
    String listName;
    Integer userId;
}
