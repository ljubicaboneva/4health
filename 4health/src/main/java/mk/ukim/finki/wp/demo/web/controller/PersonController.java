package mk.ukim.finki.wp.demo.web.controller;


import mk.ukim.finki.wp.demo.model.*;
import mk.ukim.finki.wp.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/people")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public List<Person> getPeople() {
        return personService.getPeople();
    }

    @GetMapping("/{id}")
    public Person getPerson(@PathVariable String id) {
        return personService.getPerson(id);
    }

    @PostMapping
    public Person createPerson(@RequestParam("userId") String userId,
                               @RequestParam("password") String password,
                               @RequestParam(value = "name", required = false) String name,
                               @RequestParam(value = "surname", required = false) String surname,
                               @RequestParam(value = "age") int age,
                               @RequestParam(value = "gender", required = false) String gender,
                               @RequestParam(value = "exercises", required = false) List<Exercise> exercises,
                               @RequestParam(value = "supplements", required = false) List<Supplement> supplements,
                               @RequestParam(value = "diet", required = false) Diet diet) {

        Person person = new Person(userId, password, name, surname, gender, age, exercises, supplements, diet);
        return personService.createPerson(person);

    }

    @PatchMapping("/{id}")
    public Person editPerson(@PathVariable String id,
                             @RequestParam("userId") String userId,
                             @RequestParam("password") String password,
                             @RequestParam(value = "name", required = false) String name,
                             @RequestParam(value = "surname", required = false) String surname,
                             @RequestParam(value = "age") int age,
                             @RequestParam(value = "gender", required = false) String gender,
                             @RequestParam(value = "exercises", required = false) List<Exercise> exerciseList,
                             @RequestParam(value = "supplements", required = false) List<Supplement> supplementList,
                             @RequestParam(value = "diet", required = false) Diet diet) {
        Person person = new Person(userId, password, name, surname, gender, age, exerciseList, supplementList, diet);
        return personService.editPerson(person, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        personService.deleteByUserId(id);
    }


    @GetMapping("/{id}/favourites")
    public List<Exercise> getExercises(@PathVariable String id) {
        return personService.getExercises(id);
    }

    @GetMapping("/{id}/cart")
    public List<Supplement> getSupplements(@PathVariable String id) {
        return personService.getSupplements(id);
    }

}