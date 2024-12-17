package com.capstone.grocery.repository;

import com.capstone.grocery.model.BlacklistedToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BlacklistedTokenRepository extends JpaRepository<BlacklistedToken, Integer> {
    Optional<BlacklistedToken> findByToken(String token);
}