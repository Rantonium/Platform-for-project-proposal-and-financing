package concurs.aplicatie.users_propuneri;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class UserPropuneriController {
    private final UserPropuneriRepository repository;

    UserPropuneriController(UserPropuneriRepository repository){
        this.repository=repository;
    }

    @GetMapping("/users_propuneri")
    ResponseEntity<List<UserPropuneri>> getPropuneriByUsers(){
        try {
            return ResponseEntity.ok(Objects.requireNonNull(repository.findAllStuff()));
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
