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
@Table(name="Food")
@Data
@NoArgsConstructor
public class Food {

    @Id
    @Column(name = "nameFood")
    private String name;

    @Column(name = "picFood")
    private String picUrl;

    private float kcal;


    public Food(String name, String picUrl, float kcal) {
        this.name = name;
        this.picUrl = picUrl;
        this.kcal = kcal;

    }

}
