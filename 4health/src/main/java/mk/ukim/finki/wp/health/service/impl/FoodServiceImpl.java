package mk.ukim.finki.wp.health.service.impl;

import mk.ukim.finki.wp.health.listener.AppContextListener;
import mk.ukim.finki.wp.health.model.Food;
import mk.ukim.finki.wp.health.model.exeptions.FoodAlreadyExistsException;
import mk.ukim.finki.wp.health.model.exeptions.InvalidFoodException;
import mk.ukim.finki.wp.health.repository.FoodRepository;
import mk.ukim.finki.wp.health.service.FoodService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final Logger logger = LoggerFactory.getLogger(AppContextListener.class);

    public FoodServiceImpl(FoodRepository foodRepository) {

        this.foodRepository = foodRepository;
    }


    @Override
    public List<Food> getFoods() {
        return foodRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public Food createFood(Food food) {
        Food tmp = foodRepository.findByName(food.getName());
        if (tmp != null) {
            throw new FoodAlreadyExistsException(food.getName());
        }
        logger.info("[WP-Log] {Post createFood}");
        return this.foodRepository.save(food);
    }

    @Override
    public Food editFood(Food food, String name) {
       Food f = this.foodRepository.findByName(name);
       exception(f,name);
       f.setName(food.getName());
       f.setKcal(food.getKcal());
       f.setPicUrl(food.getPicUrl());
       logger.info("[WP-Log] {Patch editFood}");
       return this.foodRepository.save(f);
    }

    @Transactional
    @Override
    public void deleteByName(String id) {
        this.foodRepository.deleteByName(id);
        logger.info("[WP-Log] {Delete deleteByName}");
    }

    @Override
    public Food getFood(String name) {
        Food f = this.foodRepository.findByName(name);
        exception(f,name);
        return f;
    }

    void exception(Food food,String name){
        if(food==null){
            throw new InvalidFoodException(name);
        }
    }
}
