package concurs.aplicatie.propuneri;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class PropunereProiect {
    private Long idPropunere;
    private Long idUser;
    private Long estimareBuget;
    private String titlu;
    private String acronim;
    private String descriere;
    private String potential_inovare;
    private String impact_asteptat;
    private String avantaj_competitiv;
    private String realizari;

    public void setIdPropunere(Long idPropunere) {
        this.idPropunere = idPropunere;
    }

    @Id
    @GeneratedValue
    public Long getIdPropunere() {
        return idPropunere;
    }
}
