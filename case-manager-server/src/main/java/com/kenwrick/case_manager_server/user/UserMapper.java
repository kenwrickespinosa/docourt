package com.kenwrick.case_manager_server.user;

import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserDTO userToDto(User user) {
        UserDTO userDto = new UserDTO();
        userDto.setUsername(user.getUsername());
        userDto.setFirstname(user.getFirstname());
        userDto.setLastname(user.getLastname());
        return userDto;
    }

    public User DtoToUser(UserDTO userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setFirstname(userDto.getFirstname());
        user.setLastname(userDto.getLastname());
        return user;
    }
}
