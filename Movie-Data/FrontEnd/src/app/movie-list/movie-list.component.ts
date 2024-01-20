import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../movie-dto';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movies : MovieDto[];

  constructor(private movieService: MovieService,
    private router: Router){
      this.movies = [];
    }

  ngOnInit(): void {
      this.getMovies();
  }
  private getMovies(){
    this.movieService.getMovieList().subscribe(
      (data:MovieDto[]) =>{
      this.movies = data;
    });
  }
  updateMovie(id: number){
    this.router.navigate(['update-movie',id]);
  }
  deleteMovie(id: number){
    this.movieService.deleteMovie(id).subscribe(data =>{
      console.log(data);
      this.getMovies();
    })
  }

}
