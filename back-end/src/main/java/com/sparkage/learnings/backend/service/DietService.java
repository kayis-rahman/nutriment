package com.sparkage.learnings.backend.service;

import com.sparkage.learnings.backend.adapter.ChatGPTAdapter;
import com.sparkage.learnings.backend.entities.MealPref;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DietService {

    private final ChatGPTAdapter chatGPTAdapter;

    public String generate(MealPref mealPlanRequest) {
        return chatGPTAdapter.compile(mealPlanRequest );
    }
}
