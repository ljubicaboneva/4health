package mk.ukim.finki.wp.health.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Exercise")
@Data
@NoArgsConstructor
public class Exercise {

    @Id
    @Column(name = "nameExercise")
    private String name;

    private String description;

    private String picUrl;

    private String isFavourite;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Person> peopleE;

    public Exercise(String name, String description, String picUrl) {
        this.name = name;
        this.description = description;
        this.picUrl = picUrl;
        this.peopleE = new ArrayList<>();
        this.isFavourite = "0";
    }

    public void addPerson(Person person) {
        this.peopleE.add(person);
        person.getExercises().add(this);
    }
}