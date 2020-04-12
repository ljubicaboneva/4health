package mk.ukim.finki.wp.health.web.controller;

import mk.ukim.finki.wp.health.model.Food;
import mk.ukim.finki.wp.health.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/foods")
public class FoodController {

    @Autowired
    private  FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping
    public List<Food> getFoods(){
        return foodService.getFoods();
    }

    @GetMapping("/{id}")
    public Food getFood(@PathVariable String id){
        return foodService.getFood(id);
    }

    @PostMapping
    public Food createFood(@RequestParam("name") String foodName,
                            @RequestParam(value="picUrl",required = false) String foodPic,
                            @RequestParam("kcal") float foodKcal)
    {


        Food food = new Food(foodName,foodPic,foodKcal);
        return foodService.createFood(food);

    }

    @PatchMapping("/{id}")
    public Food editFood(@PathVariable String id,
                         @RequestParam("name") String foodName,
                         @RequestParam(value="picUrl",required = false) String foodPic,
                         @RequestParam("kcal") float foodKcal
                       )
    {
        Food food = new Food(foodName,foodPic,foodKcal);
        return foodService.editFood(food,id);
    }

    @DeleteMapping("/{id}")
    public void deleteFood(@PathVariable String id){
        foodService.deleteByName(id);
    }

}
