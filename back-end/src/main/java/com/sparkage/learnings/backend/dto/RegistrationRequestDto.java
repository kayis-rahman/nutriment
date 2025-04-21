package com.sparkage.learnings.backend.dto;

public record RegistrationRequestDto(
        String username,
        String email,
        String password
) {
}
