package mk.ukim.finki.wp.health.web.controller;

import mk.ukim.finki.wp.health.model.Exercise;
import mk.ukim.finki.wp.health.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/exercises")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @GetMapping
    public List<Exercise> getExercises(){
        return exerciseService.getExercises();
    }

    @GetMapping("/{id}")
    public Exercise getExercise(@PathVariable String id){
        return exerciseService.getExercise(id);
    }

    @PostMapping
    public Exercise createExercise(@RequestParam("name") String exerciseName,
                           @RequestParam("description") String exerciseDesc,
                           @RequestParam(value="picUrl",required = false) String exercisePic)

    {
        Exercise exercise = new Exercise(exerciseName,exerciseDesc,exercisePic);
        return exerciseService.createExercise(exercise);

    }

    @PatchMapping("/{id}")
    public Exercise editExercise(@PathVariable String id,
                             @RequestParam("name") String exerciseName,
                             @RequestParam("description") String exerciseDesc,
                             @RequestParam("picUrl") String exercisePic)
    {
        Exercise exercise = new Exercise(exerciseName,exerciseDesc,exercisePic);
        return exerciseService.editExercise(exercise,id);
    }

    @DeleteMapping("/{id}")
    public void deleteExercise(@PathVariable String id){
        exerciseService.deleteByName(id);
    }

    @PutMapping("/{exercise}/{id}")
    public void addFav(@PathVariable String id,
                       @PathVariable String exercise){
        exerciseService.addFav(id, exercise);
    }

    @DeleteMapping("/{exercise}/delete/{id}")
    public void deleteDietPerson(@PathVariable String id,@PathVariable String exercise){
        exerciseService.deleteExercisePerson(id,exercise);
    }

}
