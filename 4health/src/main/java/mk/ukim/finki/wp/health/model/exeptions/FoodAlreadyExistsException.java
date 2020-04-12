package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class FoodAlreadyExistsException extends RuntimeException {
    public FoodAlreadyExistsException(String name) {
        super(String.format("Food with name %s already exists", name));
    }
}