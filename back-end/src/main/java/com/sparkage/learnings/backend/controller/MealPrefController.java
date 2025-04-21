package com.sparkage.learnings.backend.controller;

import com.sparkage.learnings.backend.entities.MealPref;
import com.sparkage.learnings.backend.service.MealPrefService;
import com.sparkage.learnings.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MealPrefController {

    private final MealPrefService mealPrefService;
    private final UserService userService;

    @PostMapping("/meal-pref")
    public MealPref createMealPref(
            @RequestBody MealPref mealPref,
            final Authentication authentication
    ) {

        final var user = userService.getUserByUsername(authentication.getName());
        mealPref.setUid(user.getId());
        return mealPrefService.save(mealPref);
    }

    @GetMapping("/meal-pref")
    public MealPref getMealPref(final Authentication authentication) {
        final var user = userService.getUserByUsername(authentication.getName());
        return mealPrefService.findOne(user.getId());
    }
}
