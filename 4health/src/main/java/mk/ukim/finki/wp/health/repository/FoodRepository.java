package mk.ukim.finki.wp.health.repository;

import mk.ukim.finki.wp.health.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, String> {

    Food findByName(String name);

    void deleteByName(String name);



}
