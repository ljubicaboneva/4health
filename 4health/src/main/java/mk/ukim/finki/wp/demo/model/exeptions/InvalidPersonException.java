package mk.ukim.finki.wp.demo.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidPersonException extends RuntimeException {

    public InvalidPersonException(String name){
        super(String.format("Person %s doesn't exist!",name));
    }

}