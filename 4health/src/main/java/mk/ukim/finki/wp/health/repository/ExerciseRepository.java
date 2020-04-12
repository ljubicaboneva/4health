package mk.ukim.finki.wp.health.repository;

import mk.ukim.finki.wp.health.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, String>{

    Exercise findByName(String name);

    void deleteByName(String name);
}
