package com.capstone.grocery.config;

import com.capstone.grocery.exception.UserAuthenticationEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
    private final UserAuthProvider userAuthProvider;

    @Autowired
    public SecurityConfig(UserAuthenticationEntryPoint userAuthenticationEntryPoint, UserAuthProvider userAuthProvider) {
        this.userAuthenticationEntryPoint = userAuthenticationEntryPoint;
        this.userAuthProvider = userAuthProvider;
    }

    @Bean
    public SecurityFilterChain defaultFilterChain(HttpSecurity http) throws Exception {
        http
                .exceptionHandling(exceptionHandler -> exceptionHandler.authenticationEntryPoint(userAuthenticationEntryPoint))
                .addFilterBefore(new JwtAuthFilter(userAuthProvider), BasicAuthenticationFilter.class)
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(sessionManagement -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/authenticate", "/register").permitAll()
                        .anyRequest().authenticated()
                );
        return http.build();
    }

}
