package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidExerciseException extends RuntimeException {

    public InvalidExerciseException(String name){
        super(String.format("Exercise %s doesn't exist!",name));
    }

}