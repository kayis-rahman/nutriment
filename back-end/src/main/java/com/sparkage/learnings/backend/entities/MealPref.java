package com.sparkage.learnings.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Entity
@Data
@RequiredArgsConstructor
public class MealPref {

    @Id
    private UUID uid;

    private String foodToExclude;
    private String foodToInclude;
    private String dietType;
    private int mealPerDay;
    private String budget;
    private String allergies;
    private int age;
    private String gender;
    private String goal;
    private int currentWeight;
    private int targetWeight;
    private int height;
    private String activity;
    private String cuisines;
    private int workoutDays;
    private String mealPrepTime;

}
