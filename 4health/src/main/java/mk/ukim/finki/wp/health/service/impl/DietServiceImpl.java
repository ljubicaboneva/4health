package mk.ukim.finki.wp.health.service.impl;

import mk.ukim.finki.wp.health.listener.AppContextListener;
import mk.ukim.finki.wp.health.model.Diet;
import mk.ukim.finki.wp.health.model.Person;
import mk.ukim.finki.wp.health.model.exeptions.DietAlreadyExistsException;
import mk.ukim.finki.wp.health.model.exeptions.InvalidDietException;
import mk.ukim.finki.wp.health.model.exeptions.InvalidPersonException;
import mk.ukim.finki.wp.health.repository.DietRepository;
import mk.ukim.finki.wp.health.repository.PersonRepository;
import mk.ukim.finki.wp.health.service.DietService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class DietServiceImpl implements DietService {

    private final DietRepository dietRepository;
    private final Logger logger = LoggerFactory.getLogger(AppContextListener.class);
    private final PersonRepository personRepository;

    public DietServiceImpl(DietRepository dietRepository, PersonRepository personRepository) {
        this.dietRepository = dietRepository;
        this.personRepository = personRepository;
    }

    @Override
    public List<Diet> getDiets() {
        return dietRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public Diet createDiet(Diet diet) {
        Diet tmp = dietRepository.findByName(diet.getName());
        if (tmp != null) {
            throw new DietAlreadyExistsException(diet.getName());
        }
        logger.info("[WP-Log] {Post createDiet}");
        return this.dietRepository.save(diet);
    }

    @Override
    public Diet editDiet(Diet diet, String name) {
       Diet d = this.dietRepository.findByName(name);
       exception(d,name);
       d.setName(diet.getName());
       d.setDesc(diet.getDesc());
        logger.info("[WP-Log] {Patch editDiet}");
       return this.dietRepository.save(d);
    }


    @Transactional
    @Override
    public void deleteByName(String name) {
            this.dietRepository.deleteByName(name);
        logger.info("[WP-Log] {Delete deleteByName}");
    }

    @Override
    public Diet getDiet(String name) {
        Diet d =  this.dietRepository.findByName(name);
        exception(d,name);
        return d;
    }

    @Override
    public void addDietToPerson(String user, String diet) {
        Person person = personRepository.findByUserId(user);
        if(person==null){
            throw new InvalidPersonException(user);
        }
        Diet diet1 = dietRepository.findByName(diet);
        exception(diet1,diet);
        if(person.getDiet()==null) {
            person.addDiet(diet1);
            diet1.setAdded("1");
        }
        this.personRepository.save(person);
        this.dietRepository.save(diet1);
        logger.info("[WP-Log] {Put addDietToPerson}");
    }

    @Override
    public void deleteDietPerson(String user) {
        Person person = personRepository.findByUserId(user);
        if(person==null){
            throw new InvalidPersonException(user);
        }
        Diet diet = person.getDiet();
        diet.deletePerson(person);
        diet.setAdded("0");
        dietRepository.save(diet);
        personRepository.save(person);
        logger.info("[WP-Log] {Delete deleteDietPerson}");

    }


    void exception(Diet diet,String name){
        if(diet==null){
            throw new InvalidDietException(name);
        }
    }


}
