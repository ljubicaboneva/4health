package mk.ukim.finki.wp.demo.service;

import mk.ukim.finki.wp.demo.model.Exercise;
import mk.ukim.finki.wp.demo.model.Person;
import mk.ukim.finki.wp.demo.model.Supplement;

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
