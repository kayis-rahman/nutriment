package com.sparkage.learnings.backend.controller;

import com.sparkage.learnings.backend.entities.Profile;
import com.sparkage.learnings.backend.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    @PostMapping("/profile")
    public Profile createProfile(@RequestBody Profile profile) {
        return profileService.add(profile);
    }

    @GetMapping("/profile/{id}")
    public Profile getProfile(@PathVariable() Long id) {
        return profileService.findOne(id);
    }
}
