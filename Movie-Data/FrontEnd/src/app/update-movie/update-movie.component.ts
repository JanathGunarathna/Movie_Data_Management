import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../movie-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  id!: number;
  movie: MovieDto = new MovieDto();
  updateForm!: FormGroup;
  genreList: string[] = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror'];
  isMessageSubmitted: boolean = false;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe({
      next: (data: MovieDto) => {
        this.movie = data;
        this.initializeForm();
      },
      error: (error: any) => console.log(error)
    });
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      movieName: [this.movie.movieName, Validators.required],
      year: [this.movie.year, Validators.required],
      rating: [this.movie.rating, Validators.required],
      duration: [this.movie.duration, Validators.required],
      genre: [this.movie.genre, Validators.required],
    });
  }

  onSubmit() {
    this.movieService.updateMovie(this.id, this.updateForm.value).subscribe({
      next: () => {
        this.goToMovieList();
      },
      error: (error: any) => console.log(error),
    });
  }

  goToMovieList() {
    this.router.navigate(['/movies']);
  }

  resetMovie() {
    this.movie = new MovieDto();
    this.isMessageSubmitted = false;
  }
}
