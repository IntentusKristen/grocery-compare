package com.capstone.grocery.mapper;

import com.capstone.grocery.dto.RegisterDto;
import com.capstone.grocery.dto.UserDto;
import com.capstone.grocery.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User registerToUser(RegisterDto registerDto);
}
