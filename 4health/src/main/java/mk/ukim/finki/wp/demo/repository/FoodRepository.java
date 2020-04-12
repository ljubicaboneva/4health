package mk.ukim.finki.wp.demo.repository;

import mk.ukim.finki.wp.demo.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FoodRepository extends JpaRepository<Food, String> {

    Food findByName(String name);

    void deleteByName(String name);



}
