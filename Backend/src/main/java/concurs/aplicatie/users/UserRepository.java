package concurs.aplicatie.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface UserRepository extends JpaRepository<User, Long> {

    default ResponseEntity<User> findByUsernamePass(Map<String,String> userdata){
        String username = userdata.get("username");
        String password = userdata.get("password");
        try {
            return ResponseEntity.ok(Objects.requireNonNull(findByUP(username, password)));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @Nullable
    @Query(value = "select * from User where username=?1 and parola=?2", nativeQuery = true)
    User findByUP(String username, String pass);

    @Nullable
    @Query(value="select * from User where idUser=?1", nativeQuery = true)
    List<User> findByIdUser(Long idUser);
}
