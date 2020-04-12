package mk.ukim.finki.wp.demo.service;

import mk.ukim.finki.wp.demo.model.Exercise;

import java.util.List;

public interface ExerciseService {

    List<Exercise> getExercises();

    Exercise createExercise(Exercise exercise);

    Exercise editExercise(Exercise exercise, String name);

    void deleteByName(String name);

    Exercise getExercise(String name);

    void addFav(String user,String exercise);

    void deleteExercisePerson(String user,String exercise);

}
