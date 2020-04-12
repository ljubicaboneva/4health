package mk.ukim.finki.wp.health.service;

import mk.ukim.finki.wp.health.model.Exercise;
import mk.ukim.finki.wp.health.model.Person;
import mk.ukim.finki.wp.health.model.Supplement;

import java.util.List;

public interface PersonService {


    List<Person> getPeople();

    Person getPerson(String id);

    Person createPerson(Person person);

    Person editPerson(Person person, String name);

    void deleteByUserId(String name);

    List<Exercise> getExercises(String name);

    List<Supplement> getSupplements(String name);

}
