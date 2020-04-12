package mk.ukim.finki.wp.demo.repository;

import mk.ukim.finki.wp.demo.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, String>{

    Exercise findByName(String name);

    void deleteByName(String name);
}
