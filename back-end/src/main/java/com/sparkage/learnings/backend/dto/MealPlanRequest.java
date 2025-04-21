package com.sparkage.learnings.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class MealPlanRequest {

    private String name;
    private int age;
    private String gender;
    private String goal;
    private String dietType;
    private List<String> allergies;
    private List<String> includeFoods;
    private List<String> avoidFoods;
    private int mealCount;
    private List<String> preferredCuisines;
    private String prepTime;
    private String budget;
}
