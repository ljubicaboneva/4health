package mk.ukim.finki.wp.health.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
