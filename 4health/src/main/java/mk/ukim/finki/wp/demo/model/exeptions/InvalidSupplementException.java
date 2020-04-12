package mk.ukim.finki.wp.demo.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidSupplementException extends RuntimeException {

    public InvalidSupplementException(String name){
        super(String.format("Supplement %s doesn't exist!",name));
    }

}