package concurs.aplicatie.users;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long idUser;
    private String numeUser;
    private String prenumeUser;
    private String facultate;
    private String email;
    private String telefon;
    private String parola;
    private String username;
    private String realizari;


    public User(Long idUser, String numeUser, String prenumeUser, String facultate, String email, String telefon, String parola, String username, String realizari) {
        this.idUser = idUser;
        this.numeUser = numeUser;
        this.prenumeUser = prenumeUser;
        this.facultate = facultate;
        this.email = email;
        this.telefon = telefon;
        this.parola = parola;
        this.username = username;
        this.realizari = realizari;
    }

    public User() {

    }

    @Override
    public String toString() {
        return "User{" +
                "idUser=" + idUser +
                ", numeUser='" + numeUser + '\'' +
                ", prenumeUser='" + prenumeUser + '\'' +
                ", facultate='" + facultate + '\'' +
                ", email='" + email + '\'' +
                ", telefon='" + telefon + '\'' +
                ", parola='" + parola + '\'' +
                '}';
    }
}
