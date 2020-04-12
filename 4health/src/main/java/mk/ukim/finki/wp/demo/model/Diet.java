package mk.ukim.finki.wp.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Diet")
@Data
@NoArgsConstructor
public class Diet {

    @Id
    @Column(name = "nameDiet")
    private String name;

    @Column(name = "descDiet")
    private String desc;

    private String added;

    @OneToMany(mappedBy = "diet",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Person> people;

    public Diet(String name, String desc){
        this.name = name;
        this.desc = desc;
        this.people = new ArrayList<>();
        this.added = "0";
    }
     public void deletePerson(Person person){
        this.getPeople().remove(person);
        person.setDiet(null);
     }



}
