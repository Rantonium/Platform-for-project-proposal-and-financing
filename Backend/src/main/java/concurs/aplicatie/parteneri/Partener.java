package concurs.aplicatie.parteneri;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Partener {
    private Long idPartener;
    private String tipPartener;
    private String specializare;
    private String rol;

    public void setIdPartener(Long idPartener) {
        this.idPartener = idPartener;
    }

    @Id
    @GeneratedValue
    public Long getIdPartener() {
        return idPartener;
    }
}
