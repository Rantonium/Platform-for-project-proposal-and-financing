package concurs.aplicatie.users_propuneri;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.Nullable;

import java.util.List;

public interface UserPropuneriRepository extends JpaRepository<UserPropuneri, Long> {
    @Nullable
    @Query(value="select distinct User.idUser, numeUser, prenumeUser, facultate, email, telefon, idPropunere, titlu, acronim, descriere, potential_inovare, \n" +
            "impact_asteptat, avantaj_competitiv from User,PropunereProiect\n" +
            "where User.idUser = PropunereProiect.idUser",nativeQuery = true)
    List<UserPropuneri> findAllStuff();
}
