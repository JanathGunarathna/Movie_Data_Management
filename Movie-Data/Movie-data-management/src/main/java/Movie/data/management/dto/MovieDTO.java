package Movie.data.management.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MovieDTO {
    private int id;
    private String MovieName;
    private int year;
    private float rating;
    private String duration;
    private String genre;

}
