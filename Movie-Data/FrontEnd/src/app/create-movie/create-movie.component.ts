import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../movie-dto';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent implements OnInit {
  movie: MovieDto = new MovieDto();
  Movies: any;
  isMessageSubmitted: boolean = false;

  searchForm!: FormGroup;

  constructor(
    private MovieService : MovieService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.Movies = [];
    this.searchForm = new FormGroup({
      movieName: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
    });
  }

  saveMovie() {
    this.MovieService.createMovie(this.movie).subscribe({
      next: (data: Object) => {
        console.log(data);
        this.searchForm.reset();
        this.isMessageSubmitted = true;
        this.goToMovieList();
      },
      error: (error: any) => console.log(error)
    });
  }

  goToMovieList() {
    this.router.navigate(['/movie']);
  }

  onSubmit() {
    this.movie = this.searchForm.value;
    this.saveMovie();
  }

}
