package com.sparkage.learnings.backend.service;

import com.sparkage.learnings.backend.entities.MealPref;
import com.sparkage.learnings.backend.repository.MealPrefRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MealPrefService {

    private final MealPrefRepository mealPrefRepository;
    public MealPref save(MealPref mealPref) {
        return mealPrefRepository.save(mealPref);
    }

    public MealPref findOne(UUID id) {
        return mealPrefRepository.findById(id).orElse(null);
    }
}
