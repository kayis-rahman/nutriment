package com.sparkage.learnings.backend.service;

import com.sparkage.learnings.backend.entities.Profile;
import com.sparkage.learnings.backend.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;

    public Profile add(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile findOne(Long id) {
        return profileRepository.findById(id).orElse(null);
    }
}
