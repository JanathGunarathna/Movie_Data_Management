package Movie.data.management.Service;

import Movie.data.management.dto.MovieDTO;
import Movie.data.management.model.Movie;
import Movie.data.management.repository.MovieRepository;
import jakarta.persistence.Id;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ModelMapper modelMapper;

    public MovieDTO save(MovieDTO movieDTO){
        movieRepository.save(modelMapper.map(movieDTO, Movie.class));
        return movieDTO;
    }
    public List<MovieDTO> getAllMovies(){
        List<Movie>movieList =movieRepository.findAll();
        return modelMapper.map(movieList,new TypeToken<List<MovieDTO>>(){}.getType());
    }
    public MovieDTO update(MovieDTO movieDTO){
        movieRepository.save(modelMapper.map(movieDTO,Movie.class));
        return movieDTO;
    }
    public boolean delete(MovieDTO movieDTO){
        movieRepository.delete(modelMapper.map(movieDTO,Movie.class));
        return true;
    }

    public MovieDTO getMovieByID(String movieID){
        Movie movie= movieRepository.getMovieByID(movieID);
        return modelMapper.map(movie,MovieDTO.class);
    }
}
