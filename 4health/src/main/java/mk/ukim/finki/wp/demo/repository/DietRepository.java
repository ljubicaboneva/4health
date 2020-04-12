package mk.ukim.finki.wp.demo.repository;

import mk.ukim.finki.wp.demo.model.Diet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DietRepository extends JpaRepository<Diet, String>{

    Diet findByName(String name);

    void deleteByName(String name);
}
