package mk.ukim.finki.wp.health.model.exeptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class SupplementAlreadyExistsException extends RuntimeException {
    public SupplementAlreadyExistsException(String userId) {
        super(String.format("Supplement with userId %s already exists", userId));
    }
}