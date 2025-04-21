package com.sparkage.learnings.backend.controller;

import com.sparkage.learnings.backend.dto.MealPlanRequest;
import com.sparkage.learnings.backend.entities.MealPref;
import com.sparkage.learnings.backend.service.DietPrefService;
import com.sparkage.learnings.backend.service.DietService;
import com.sparkage.learnings.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DietGeneratorController {

    private final DietService dietService;
    private final DietPrefService dietPrefService;
    private final UserService userService;

    @GetMapping("/diet/generate")
    public String generateDiet(final Authentication authentication) {
        final var user = userService.getUserByUsername(authentication.getName());
        MealPref mealPlanRequest = dietPrefService.getBy(user.getId());
        return dietService.generate(mealPlanRequest);
    }
}
