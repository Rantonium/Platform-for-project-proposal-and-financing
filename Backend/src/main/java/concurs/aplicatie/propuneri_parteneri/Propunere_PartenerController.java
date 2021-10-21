package concurs.aplicatie.propuneri_parteneri;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
public class Propunere_PartenerController {

    private final Propunere_PartenerRepository repository;

    Propunere_PartenerController(Propunere_PartenerRepository repository){
        this.repository=repository;
    }

    @PostMapping("/propunere_partener")
    ResponseEntity<Propunere_Partener> insertPropPartener(@RequestBody Propunere_Partener prop_part){
        try {
            return ResponseEntity.ok(Objects.requireNonNull(repository.save(prop_part)));
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
