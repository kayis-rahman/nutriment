package com.sparkage.learnings.backend.adapter;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.ChatCompletion;
import com.openai.models.ChatCompletionCreateParams;
import com.openai.models.ChatModel;
import com.sparkage.learnings.backend.dto.MealPlanRequest;
import com.sparkage.learnings.backend.entities.MealPref;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class ChatGPTAdapter {

    OpenAIClient client = OpenAIOkHttpClient.fromEnv();

    public String compile(MealPref request) {
        String prompt = buildPrompt(request);
        ChatCompletionCreateParams params = ChatCompletionCreateParams.builder()
                .addUserMessage(prompt)
                .model(ChatModel.GPT_4O_MINI)
                .build();
        ChatCompletion chatCompletion = client.chat().completions().create(params);

        Optional<String> content = chatCompletion.choices().get(0).message().content();
//        Optional<String> content = Optional.of(mockResponse());
        System.out.println("content = " + content);
        content = content.map(s -> s.substring(s.indexOf("["), s.lastIndexOf("]") + 1));
        return content.orElse("");
    }

    private String buildPrompt(MealPref req) {
        return """
                Create a week meal plan based on the following details:
                
                Age: %d
                Gender: %s
                Goal: %s
                Diet Type: %s
                Allergies: %s
                Foods to Include: %s
                Foods to Avoid: %s
                Number of Meals Per Day: %d
                Preferred Cuisines: %s
                Meal Prep Time: %s
                Budget: %s
                Current Weight: %d kg
                Target Weight: %d kg
                Height: %d cm
                Activity Level: %s
                Workout Days per Week: %d
                
                Output the meal plan in JSON format as a list array with the following fields:
                  - day
                  - mealType (Breakfast, Lunch, etc.)
                  - description
                  - calories
                  - protein
                  - carbs
                  - fats
                  - prepTime
                """
                .formatted(
                        req.getAge(),
                        req.getGender(),
                        req.getGoal(),
                        req.getDietType(),
                        req.getAllergies(),
                        req.getFoodToInclude(),
                        req.getFoodToExclude(),
                        req.getMealPerDay(),
                        req.getCuisines(),
                        req.getMealPrepTime(),
                        req.getBudget(),
                        req.getCurrentWeight(),
                        req.getTargetWeight(),
                        req.getHeight(),
                        req.getActivity(),
                        req.getWorkoutDays()
                );
    }

    private String mockResponse() {
        return """
                Here’s a meal plan for Kayis tailored to his goals and preferences, formatted in JSON:
                
                ```json
                [
                    {
                        "day": "Monday",
                        "mealType": "Breakfast",
                        "description": "Scrambled eggs with spinach and cherry tomatoes, served with a side of chicken sausage.",
                        "calories": 450,
                        "protein": 34,
                        "carbs": 20,
                        "fats": 28,
                        "prepTime": "15 minutes"
                    },
                    {
                        "day": "Monday",
                        "mealType": "Lunch",
                        "description": "Grilled chicken breast served with a side of basmati rice and sautéed vegetables (bell peppers, zucchini, and broccoli).",
                        "calories": 600,
                        "protein": 50,
                        "carbs": 70,
                        "fats": 10,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Monday",
                        "mealType": "Dinner",
                        "description": "Beef stir-fry with mixed vegetables (carrot, bell pepper, onion) served over rice.",
                        "calories": 700,
                        "protein": 55,
                        "carbs": 80,
                        "fats": 20,
                        "prepTime": "25 minutes"
                    },
                    {
                        "day": "Monday",
                        "mealType": "Snack",
                        "description": "Roasted chickpeas with spices.",         \s
                        "calories": 200,
                        "protein": 10,
                        "carbs": 30,
                        "fats": 5,
                        "prepTime": "10 minutes"
                    },
                    {
                        "day": "Tuesday",
                        "mealType": "Breakfast",
                        "description": "Omelette with mushrooms, onions, and bell peppers, with a side of chicken bacon.",
                        "calories": 480,
                        "protein": 40,
                        "carbs": 15,
                        "fats": 30,
                        "prepTime": "15 minutes"
                    },
                    {
                        "day": "Tuesday",
                        "mealType": "Lunch",
                        "description": "Tandoori chicken with a side of brown rice and mixed green salad.",
                        "calories": 650,
                        "protein": 58,
                        "carbs": 75,
                        "fats": 12,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Tuesday",
                        "mealType": "Dinner",
                        "description": "Grilled lamb chops with quinoa and steamed broccoli.",
                        "calories": 680,
                        "protein": 50,
                        "carbs": 65,
                        "fats": 28,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Tuesday",
                        "mealType": "Snack",
                        "description": "Handful of mixed nuts (almonds, walnuts, and cashews).",          \s
                        "calories": 200,
                        "protein": 5,
                        "carbs": 10,
                        "fats": 18,
                        "prepTime": "5 minutes"
                    },
                    {
                        "day": "Wednesday",
                        "mealType": "Breakfast",
                        "description": "Egg and turkey sausage burrito in a gluten-free wrap with salsa.",
                        "calories": 500,
                        "protein": 35,
                        "carbs": 45,
                        "fats": 15,
                        "prepTime": "20 minutes"
                    },
                    {
                        "day": "Wednesday",
                        "mealType": "Lunch",
                        "description": "Chicken curry (gluten-free) with basmati rice and steamed green beans.",
                        "calories": 650,
                        "protein": 47,
                        "carbs": 75,
                        "fats": 15,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Wednesday",
                        "mealType": "Dinner",
                        "description": "Beef kebabs with mixed vegetable skewers and a side of rice.",
                        "calories": 720,
                        "protein": 60,
                        "carbs": 70,
                        "fats": 25,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Wednesday",
                        "mealType": "Snack",
                        "description": "Hard-boiled eggs with a sprinkle of salt and pepper.",          \s
                        "calories": 140,
                        "protein": 12,
                        "carbs": 1,
                        "fats": 9,
                        "prepTime": "5 minutes"
                    },
                    {
                        "day": "Thursday",
                        "mealType": "Breakfast",
                        "description": "Egg fried rice with peas, carrots, and chicken bits.", \s
                        "calories": 480,
                        "protein": 25,
                        "carbs": 60,
                        "fats": 15,
                        "prepTime": "20 minutes"
                    },
                    {
                        "day": "Thursday",
                        "mealType": "Lunch",
                        "description": "Masala grilled fish with a side of quinoa and roasted vegetables.",
                        "calories": 550,
                        "protein": 40,
                        "carbs": 55,
                        "fats": 12,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Thursday",
                        "mealType": "Dinner",
                        "description": "Chicken tikka masala with basmati rice and a side of steamed broccoli.",
                        "calories": 720,
                        "protein": 55,
                        "carbs": 80,
                        "fats": 20,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Thursday",
                        "mealType": "Snack",
                        "description": "Beef jerky.",         \s
                        "calories": 100,
                        "protein": 10,
                        "carbs": 6,
                        "fats": 3,
                        "prepTime": "5 minutes"
                    },
                    {
                        "day": "Friday",
                        "mealType": "Breakfast",
                        "description": "Chicken and vegetable omelette with a slice of gluten-free toast.",
                        "calories": 450,
                        "protein": 35,
                        "carbs": 30,
                        "fats": 25,
                        "prepTime": "15 minutes"
                    },
                    {
                        "day": "Friday",
                        "mealType": "Lunch",
                        "description": "Grilled steak with brown rice and steamed asparagus.",
                        "calories": 700,
                        "protein": 60,
                        "carbs": 70,
                        "fats": 25,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Friday",
                        "mealType": "Dinner",
                        "description": "Chicken biryani with a side of cucumber and tomato salad.",
                        "calories": 750,
                        "protein": 45,
                        "carbs": 90,
                        "fats": 20,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Friday",
                        "mealType": "Snack",
                        "description": "Protein shake made with plant-based protein powder and water.",          \s
                        "calories": 150,
                        "protein": 25,
                        "carbs": 3,
                        "fats": 2,
                        "prepTime": "5 minutes"
                    },
                    {
                        "day": "Saturday",
                        "mealType": "Breakfast",
                        "description": "Egg and vegetable frittata with a side of turkey bacon.", \s
                        "calories": 500,
                        "protein": 38,
                        "carbs": 18,
                        "fats": 30,
                        "prepTime": "20 minutes"
                    },
                    {
                        "day": "Saturday",
                        "mealType": "Lunch",
                        "description": "Chicken shawarma platter with rice, pickled vegetables, and tahini sauce.",
                        "calories": 600,
                        "protein": 50,
                        "carbs": 75,
                        "fats": 10,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Saturday",
                        "mealType": "Dinner",
                        "description": "Grilled lamb with couscous and roasted seasonal vegetables.",
                        "calories": 700,
                        "protein": 55,
                        "carbs": 65,
                        "fats": 20,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Saturday",
                        "mealType": "Snack",
                        "description": "Sliced turkey breast with hummus.",          \s
                        "calories": 200,
                        "protein": 20,
                        "carbs": 10,
                        "fats": 10,
                        "prepTime": "10 minutes"
                    },
                    {
                        "day": "Sunday",
                        "mealType": "Breakfast",
                        "description": "Breakfast burrito with scrambled eggs, turkey sausage, and salsa in gluten-free wraps.",
                        "calories": 500,
                        "protein": 32,
                        "carbs": 40,
                        "fats": 24,
                        "prepTime": "20 minutes"
                    },
                    {
                        "day": "Sunday",
                        "mealType": "Lunch",
                        "description": "Beef vindaloo with white rice and a side of cucumber salad.",
                        "calories": 700,
                        "protein": 50,
                        "carbs": 82,
                        "fats": 22,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Sunday",
                        "mealType": "Dinner",
                        "description": "Grilled chicken marinara with gluten-free pasta and a side of sautéed spinach.",
                        "calories": 680,
                        "protein": 55,
                        "carbs": 70,
                        "fats": 20,
                        "prepTime": "30 minutes"
                    },
                    {
                        "day": "Sunday",
                        "mealType": "Snack",
                        "description": "Protein bar (dairy-free, gluten-free).",          \s
                        "calories": 200,
                        "protein": 20,
                        "carbs": 15,
                        "fats": 8,
                        "prepTime": "2 minutes"
                    }
                ]
                """;
    }
}
