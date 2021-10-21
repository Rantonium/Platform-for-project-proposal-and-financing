package concurs.aplicatie.parteneri;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.Nullable;

import java.util.List;

public interface PartenerRepository extends JpaRepository<Partener, Long> {
    @Nullable
    @Query(value="select * from Partener, Propunere_Partener where Propunere_Partener.idPropunere=?1 and Partener.idPartener=Propunere_Partener.idParteneri group by Partener.idPartener;",nativeQuery = true)
    List<Partener> findByIdPropunere(Long idPropunere);
}
