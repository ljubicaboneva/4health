package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidFoodException extends RuntimeException {

    public InvalidFoodException(String name){
        super(String.format("Food %s doesn't exist!",name));
    }

}
