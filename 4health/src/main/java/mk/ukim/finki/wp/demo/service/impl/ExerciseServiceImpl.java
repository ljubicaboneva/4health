package mk.ukim.finki.wp.demo.service.impl;

import mk.ukim.finki.wp.demo.listener.AppContextListener;
import mk.ukim.finki.wp.demo.model.Exercise;
import mk.ukim.finki.wp.demo.model.Person;
import mk.ukim.finki.wp.demo.model.exeptions.ExerciseAlreadyExistsException;
import mk.ukim.finki.wp.demo.model.exeptions.InvalidExerciseException;
import mk.ukim.finki.wp.demo.model.exeptions.InvalidPersonException;
import mk.ukim.finki.wp.demo.repository.ExerciseRepository;
import mk.ukim.finki.wp.demo.repository.PersonRepository;
import mk.ukim.finki.wp.demo.service.ExerciseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Iterator;
import java.util.List;


@Service
public class ExerciseServiceImpl implements ExerciseService{

    private final ExerciseRepository exerciseRepository;
    private final PersonRepository personRepository;
    private final Logger logger = LoggerFactory.getLogger(AppContextListener.class);

    public ExerciseServiceImpl(ExerciseRepository exerciseRepository, PersonRepository personRepository) {
        this.exerciseRepository = exerciseRepository;
        this.personRepository = personRepository;
    }

    @Override
    public List<Exercise> getExercises() {
        return exerciseRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public Exercise createExercise(Exercise exercise) {
        Exercise tmp = exerciseRepository.findByName(exercise.getName());
        if (tmp != null) {
            throw new ExerciseAlreadyExistsException(exercise.getName());
        }
        logger.info("[WP-Log] {Post createExercise}");
        return this.exerciseRepository.save(exercise);
    }

    @Override
    public Exercise editExercise(Exercise exercise, String name) {
        Exercise e = this.exerciseRepository.findByName(name);
        exception(e,name);
        e.setName(exercise.getName());
        e.setDescription(exercise.getDescription());
        e.setPicUrl(exercise.getPicUrl());
        logger.info("[WP-Log] {Patch editExercise}");
        return this.exerciseRepository.save(e);
    }

    @Transactional
    @Override
    public void deleteByName(String name) {
        this.exerciseRepository.deleteByName(name);
        logger.info("[WP-Log] {Delete deleteByName}");
    }

    @Override
    public Exercise getExercise(String name) {
        Exercise e = this.exerciseRepository.findByName(name);
        exception(e,name);
        return e;
    }

    @Override
    public void addFav(String user,String exercise) {

        Person person = personRepository.findByUserId(user);
        if(person==null){
            throw new InvalidPersonException(user);
        }
        Exercise exercise1 = exerciseRepository.findByName(exercise);
        exception(exercise1,exercise);
        if(!person.getExercises().contains(exercise1)){
            exercise1.addPerson(person);
            exercise1.setIsFavourite("1");
            exerciseRepository.save(exercise1);
        }
        logger.info("[WP-Log] {Put addFav}");
    }

    @Override
    public void deleteExercisePerson(String user, String exercise) {

        Exercise exercise1 = exerciseRepository.findByName(exercise);
        exception(exercise1,exercise);
        for (Iterator<Person> iterator = exercise1.getPeopleE().iterator(); iterator.hasNext(); ) {
            Person value = iterator.next();
            if (value.getUserId().equals(user)) {
                iterator.remove();
                exercise1.setIsFavourite("0");
            }
            exerciseRepository.save(exercise1);
            personRepository.save(value);
            logger.info("[WP-Log] {Delete deleteExercisePerson}");
        }
    }

    void exception(Exercise exercise,String name){
        if(exercise==null){
            throw new InvalidExerciseException(name);
        }
    }
}
