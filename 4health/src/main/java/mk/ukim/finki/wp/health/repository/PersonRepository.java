package mk.ukim.finki.wp.health.repository;

import mk.ukim.finki.wp.health.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person,String>{

    Person findByUserId(String user);

    void deleteByUserId(String userN);

}
