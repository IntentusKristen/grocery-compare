package com.capstone.grocery.service;

import com.capstone.grocery.dto.LoginDto;
import com.capstone.grocery.dto.RegisterDto;
import com.capstone.grocery.dto.UserDto;
import com.capstone.grocery.exception.AppException;
import com.capstone.grocery.mapper.UserMapper;
import com.capstone.grocery.model.User;
import com.capstone.grocery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public UserDto login(LoginDto loginDto) {
        User user = userRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(loginDto.getPassword()), user.getPassword()))
            return userMapper.toUserDto(user);
        throw new AppException("Invalid password", HttpStatus.UNAUTHORIZED);
    }

    public UserDto register(RegisterDto registerDto) {
        Optional<User> existingUser = userRepository.findByEmail(registerDto.getEmail());
        if (existingUser.isPresent())
            throw new AppException("User already exists", HttpStatus.CONFLICT);

        User user = User.builder()
                .firstName(registerDto.getFirstName())
                .lastName(registerDto.getLastName())
                .email(registerDto.getEmail())
                .password(passwordEncoder.encode(CharBuffer.wrap(registerDto.getPassword())))
                .build();

        userRepository.save(user);
        return userMapper.toUserDto(user);
    }
}
