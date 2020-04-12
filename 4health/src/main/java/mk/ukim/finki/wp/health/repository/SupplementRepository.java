package mk.ukim.finki.wp.health.repository;


import mk.ukim.finki.wp.health.model.Supplement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplementRepository extends JpaRepository<Supplement,String> {

    Supplement findByName(String name);

    void deleteByName(String name);


}
