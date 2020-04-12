package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PersonAlreadyExistsException extends RuntimeException {
    public PersonAlreadyExistsException(String userId) {
        super(String.format("Person with userId %s already exists", userId));
    }
}