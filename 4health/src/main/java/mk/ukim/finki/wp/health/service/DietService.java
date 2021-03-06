package mk.ukim.finki.wp.health.service;

import mk.ukim.finki.wp.health.model.Diet;

import java.util.List;

public interface DietService {

    List<Diet> getDiets();

    Diet createDiet(Diet diet);

    Diet editDiet(Diet diet, String name);

    void deleteByName(String name);

    Diet getDiet(String name);

    void deleteDietPerson(String user);

    void addDietToPerson(String user,String diet);

}
