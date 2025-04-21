package com.sparkage.learnings.backend.controller;

import com.sparkage.learnings.backend.dto.RegistrationRequestDto;
import com.sparkage.learnings.backend.dto.RegistrationResponseDto;
import com.sparkage.learnings.backend.exceptions.ValidationException;
import com.sparkage.learnings.backend.mapper.UserRegistrationMapper;
import com.sparkage.learnings.backend.service.UserRegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class RegistrationController {

    private final UserRegistrationService userRegistrationService;

    private final UserRegistrationMapper userRegistrationMapper;

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponseDto> registerUser(
            @RequestBody final RegistrationRequestDto registrationDTO) throws ValidationException {

        final var registeredUser = userRegistrationService
                .registerUser(registrationDTO);

        return ResponseEntity.ok(
                userRegistrationMapper.toRegistrationResponseDto(registeredUser)
        );
    }

}