package mk.ukim.finki.wp.demo.service.impl;

import mk.ukim.finki.wp.demo.listener.AppContextListener;
import mk.ukim.finki.wp.demo.model.Exercise;
import mk.ukim.finki.wp.demo.model.Person;
import mk.ukim.finki.wp.demo.model.Supplement;
import mk.ukim.finki.wp.demo.model.exeptions.InvalidPersonException;
import mk.ukim.finki.wp.demo.model.exeptions.PersonAlreadyExistsException;
import mk.ukim.finki.wp.demo.repository.PersonRepository;
import mk.ukim.finki.wp.demo.service.PersonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;


@Service
public class PersonServiceImpl implements PersonService{

    private final PersonRepository personRepository;
    private final Logger logger = LoggerFactory.getLogger(AppContextListener.class);

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public List<Person> getPeople() {
        return personRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public Person getPerson(String id) {
        Person p =  this.personRepository.findByUserId(id);
        exception(p,id);
        return p;
    }

    @Override
    public Person createPerson(Person user) {
        Person tmp = personRepository.findByUserId(user.getUserId());
        if (tmp != null) {
            throw new PersonAlreadyExistsException(user.getUserId());
        }
        logger.info("[WP-Log] {Post createPerson}");
        return this.personRepository.save(user);
    }

    @Override
    public Person editPerson(Person person, String name) {
        Person u = this.personRepository.findByUserId(name);
        exception(u,name);
        u.setUserId(person.getUserId());
        u.setPassword(person.getPassword());
        u.setName(person.getName());
        u.setSurname(person.getSurname());
        u.setAge(person.getAge());
        u.setDiet(person.getDiet());
        u.setGender(person.getGender());
        logger.info("[WP-Log] {Patch editPerson}");
        return this.personRepository.save(u);
    }

    @Transactional
    @Override
    public void deleteByUserId(String name) {
        logger.info("[WP-Log] {Delete deleteByUserId}");
        personRepository.deleteByUserId(name);
    }


    @Override
    public List<Exercise> getExercises(String name) {
        Person person = personRepository.findByUserId(name);
        exception(person,name);
        return person.getExercises();
    }

    @Override
    public List<Supplement> getSupplements(String name) {
        Person person = personRepository.findByUserId(name);
        exception(person,name);
        return person.getSupplements();
    }

    void exception(Person person,String name){
        if(person==null){
            throw new InvalidPersonException(name);
        }
    }
}
