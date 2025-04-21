package com.sparkage.learnings.backend.service;

import com.sparkage.learnings.backend.dto.MealPlanRequest;
import com.sparkage.learnings.backend.entities.MealPref;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DietPrefService {

    private final MealPrefService mealPrefService;

    public MealPref getBy(UUID id) {

        return mealPrefService.findOne(id);
    }
}
