package com.capstone.grocery.dto;

import lombok.Data;

@Data
public class LoginDto {
    private String email;
    private char[] password;
}
