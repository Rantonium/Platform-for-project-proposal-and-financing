package concurs.aplicatie.parteneri;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class PartenerController {
    private final PartenerRepository repository;

    PartenerController(PartenerRepository repository){
        this.repository = repository;
    }

    @GetMapping("/parteneri")
    ResponseEntity<List<Partener>> getParteneri(Long idPropunere){
        if(idPropunere!=null)
            try {
                return ResponseEntity.ok(Objects.requireNonNull(repository.findByIdPropunere(idPropunere)));
            }
            catch(Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        return ResponseEntity.ok(Objects.requireNonNull(repository.findAll()));
    }


    @PostMapping("/parteneri")
    public Partener createPartener(@RequestBody Partener partener){
        try{
            return repository.save(partener);
        }
        catch(Exception e){
            return null;
        }
    }

}
