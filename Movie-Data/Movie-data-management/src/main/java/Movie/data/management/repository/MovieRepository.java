package Movie.data.management.repository;

import Movie.data.management.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie,Integer> {
    @Query(value = "SELECT * FROM MOVIE WHERE ID = ?1",nativeQuery = true)
    Movie getMovieByID(String Id);

}
