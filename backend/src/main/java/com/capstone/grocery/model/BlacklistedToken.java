package com.capstone.grocery.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "blacklisted_tokens")
public class BlacklistedToken {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "blacklisted_token_id")
    private Integer id;

    private String token;

    public BlacklistedToken(String token) {
        this.token = token;
    }
}
