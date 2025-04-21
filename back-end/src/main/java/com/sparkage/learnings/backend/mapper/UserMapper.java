package com.sparkage.learnings.backend.mapper;

import com.sparkage.learnings.backend.dto.UserProfileDto;
import com.sparkage.learnings.backend.entities.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserProfileDto toUserProfileDto(final User user) {
        return new UserProfileDto(user.getEmail(), user.getUsername());
    }
}
