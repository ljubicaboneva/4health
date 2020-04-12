package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ExerciseAlreadyExistsException extends RuntimeException {
    public ExerciseAlreadyExistsException(String name) {
        super(String.format("Exercise with name %s already exists", name));
    }
}