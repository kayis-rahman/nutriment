package com.sparkage.learnings.backend.repository;

import com.sparkage.learnings.backend.entities.MealPref;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MealPrefRepository extends CrudRepository<MealPref, UUID> {
}
