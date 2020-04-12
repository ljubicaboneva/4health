package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DietAlreadyExistsException extends RuntimeException {
    public DietAlreadyExistsException(String name) {
        super(String.format("Diet with name %s already exists", name));
    }
}