package concurs.aplicatie.users;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
public class UserController {
    private final UserRepository repository;

    UserController(UserRepository repository) {this.repository= repository;}

    @GetMapping("/users")
    ResponseEntity<List<User>> getUsers(@RequestParam Long idUser){
        if(idUser!=null)
            try {
                return ResponseEntity.ok(Objects.requireNonNull(repository.findByIdUser(idUser)));
            }
            catch(Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        return ResponseEntity.ok(Objects.requireNonNull(repository.findAll()));
    }

    @PostMapping("/login")
    ResponseEntity<User> getUserLog(@RequestBody Map<String,String> userdata){
        try {
            return repository.findByUsernamePass(userdata);
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PostMapping("/admin")
    Boolean allowAdmin(@RequestBody Map<String, String> adminData){
        if(adminData.get("username").equals("admin") && adminData.get("password").equals("admin"))
            return Boolean.TRUE;
        else
            return Boolean.FALSE;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        try {
            return repository.save(user);
        }
        catch(Exception e){
            return null;
        }
    }
    
}
