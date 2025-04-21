package com.sparkage.learnings.backend.mapper;

import com.sparkage.learnings.backend.dto.RegistrationRequestDto;
import com.sparkage.learnings.backend.dto.RegistrationResponseDto;
import com.sparkage.learnings.backend.entities.User;
import org.springframework.stereotype.Component;

@Component
public class UserRegistrationMapper {
    public User toEntity(RegistrationRequestDto registrationRequestDto) {
        final var user = new User();

        user.setEmail(registrationRequestDto.email());
        user.setUsername(registrationRequestDto.username());
        user.setPassword(registrationRequestDto.password());

        return user;
    }

    public RegistrationResponseDto toRegistrationResponseDto(
            final User user) {

        return new RegistrationResponseDto(
                user.getEmail(), user.getUsername());
    }
}
