package mk.ukim.finki.wp.health.service;

import mk.ukim.finki.wp.health.model.Food;

import java.util.List;

public interface FoodService {

    List<Food> getFoods();

    Food createFood(Food food);

    Food editFood(Food food, String name);

    void deleteByName(String name);

    Food getFood(String name);
}
