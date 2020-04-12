package mk.ukim.finki.wp.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Supplement")
@Data
@NoArgsConstructor
public class Supplement {

    @Id
    @Column(name = "nameSupplement")
    private String name;

    @Column(name = "descSupplement")
    private String desc;

    private int price;

    @Column(name="gr")
    private float grams;

    @Column (name = "picSupplement")
    private String picUrl;

    private String addedToCart;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Person> peopleS;

    public Supplement(String name, String desc,int price, String picUrl, float grams){
        this.name = name;
        this.desc = desc;
        this.price=price;
        this.picUrl=picUrl;
        this.grams=grams;
        this.addedToCart = "0";
        this.peopleS = new ArrayList<>();
    }

    public void addPerson(Person person) {
        this.peopleS.add(person);
        person.getSupplements().add(this);
    }
}
