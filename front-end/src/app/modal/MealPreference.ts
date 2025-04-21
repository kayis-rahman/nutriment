export interface MealPreference {
  mealPrepTime?: string;
  foodToExclude?: string;
  foodToInclude?: string;
  dietType?: string;
  uid: string;
  mealPerDay?: number;
  budget?: string;
  allergies?: string;
  age?: number;
  gender?: string;
  goal?: string;
  currentWeight?: number;
  targetWeight?: number;
  height?: number;
  activity?: string;
  cuisines?: string;
  workoutDays?: number
}
