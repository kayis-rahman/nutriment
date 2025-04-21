package com.sparkage.learnings.backend.dto;

public record AuthenticationRequestDto(
        String username,
        String password
) {
}
