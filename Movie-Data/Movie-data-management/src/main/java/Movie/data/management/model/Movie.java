package Movie.data.management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="MovieName")
    private String MovieName;

    @Column(name="Year")
    private int year;

    @Column(name="Rating")
    private float rating;

    @Column(name="Duration")
    private String duration;

    @Column(name="Genre")
    private String genre;
}
