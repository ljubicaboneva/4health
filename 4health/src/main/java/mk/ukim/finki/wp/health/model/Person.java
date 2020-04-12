package mk.ukim.finki.wp.health.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="person")
@Data
@NoArgsConstructor
public class Person {

    @Id
    @Column(name = "userId")
    private String userId;

    private String password;

    @Column(name = "firstName")
    private String name;

    @Column(name = "lastName")
    private String surname;

    private String gender;

    private int age;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(mappedBy = "peopleE")
    private List<Exercise> exercises;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(mappedBy = "peopleS")
    private List<Supplement> supplements;

    @ManyToOne
    private Diet diet;

    public Person(String userId, String password, String name, String surname, String gender, int age, List<Exercise> exercises, List<Supplement> supplements, Diet diet) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
        this.exercises = exercises;
        this.supplements = supplements;
        this.diet = diet;

    }

    public void addDiet(Diet diet) {
        this.setDiet(diet);
    }

}
