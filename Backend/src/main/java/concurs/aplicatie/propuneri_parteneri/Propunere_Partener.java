package concurs.aplicatie.propuneri_parteneri;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

@Data
@Entity
public class Propunere_Partener {
    @Id
    @GeneratedValue
    private Long idCerere;
    private Long idPropunere;
    private Long idParteneri;
    private Date dataLimita;
    private int stare;
}
