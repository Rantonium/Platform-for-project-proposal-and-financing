package concurs.aplicatie.users_propuneri;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class UserPropuneri {
    private Long idUser;
    private String numeUser;
    private String prenumeUser;
    private String facultate;
    private String email;
    private String telefon;
    @Id
    private Long idPropunere;
    private String titlu;
    private String acronim;
    private String descriere;
    private String potential_inovare;
    private String impact_asteptat;
    private String avantaj_competitiv;

}
