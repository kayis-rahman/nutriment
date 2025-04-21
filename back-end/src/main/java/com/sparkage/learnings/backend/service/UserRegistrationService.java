package com.sparkage.learnings.backend.service;

import com.sparkage.learnings.backend.dto.RegistrationRequestDto;
import com.sparkage.learnings.backend.entities.User;
import com.sparkage.learnings.backend.exceptions.ValidationException;
import com.sparkage.learnings.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class UserRegistrationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public User registerUser(RegistrationRequestDto request) throws ValidationException {
        if (userRepository.existsByUsername(request.username()) ||
                userRepository.existsByEmail(request.email())) {

            throw new ValidationException("Username or Email already exists");
        }

        User user = new User();
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setCreatedAt(Instant.now());

        return userRepository.save(user);
    }
}