package concurs.aplicatie.propuneri;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class PropunereProiectController {

    private final PropunereProiectRepository repository;

    PropunereProiectController(PropunereProiectRepository repository){ this.repository = repository; }

    @GetMapping("/propuneri")
    ResponseEntity<List<PropunereProiect>> getPropuneri(@RequestParam @Nullable Long idUser,
                                                        @RequestParam @Nullable Long idPartener,
                                                        @RequestParam @Nullable Long idPropunere){

        if(idUser!= null)
        {
            try {
                return ResponseEntity.ok(Objects.requireNonNull(repository.findByIdUser(idUser)));
            }
            catch(Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        }
        if(idPartener!=null){
            try {
                return ResponseEntity.ok(Objects.requireNonNull(repository.findByIdPartener(idPartener)));
            }
            catch(Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        }
        if(idPropunere!=null){
            try {
                return ResponseEntity.ok(Objects.requireNonNull(repository.findByIdPropunere(idPropunere)));
            }
            catch(Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        }
        return ResponseEntity.ok(Objects.requireNonNull(repository.findAll()));
    }

    @PostMapping("/propuneri")
    public PropunereProiect createPropunereProiect(@Validated @RequestBody PropunereProiect propunere){
        try{
            return repository.save(propunere);
        }
        catch(Exception e) {
            return null;
        }
    }

}
