package concurs.aplicatie.propuneri;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.Nullable;

import java.util.List;

public interface PropunereProiectRepository extends JpaRepository<PropunereProiect, Long> {
    @Nullable
    @Query(value="select * from PropunereProiect where idUser=?1", nativeQuery = true)
    List<PropunereProiect> findByIdUser(Long idUser);

    @Nullable
    @Query(value="select * from PropunereProiect, Propunere_Partener where " +
            "PropunereProiect.idPropunere= Propunere_Partener.idPropunere and Propunere_Partener.idParteneri=?1",
            nativeQuery = true)
    List<PropunereProiect> findByIdPartener(Long idPartener);

    @Nullable
    @Query(value="select * from PropunereProiect where idPropunere=?1",nativeQuery = true)
    List<PropunereProiect> findByIdPropunere(Long idPropunere);
}
