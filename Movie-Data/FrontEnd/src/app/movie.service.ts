import { Injectable } from '@angular/core';
import { MovieDto } from './movie-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURL = "http://localhost:8080/movie/movies";

  constructor(private httpClient: HttpClient) { }

  getMovieList(): Observable<MovieDto[]> {
    return this.httpClient.get<MovieDto[]>(`${this.baseURL}`);
  }

  createMovie(movie: MovieDto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, movie);
  }

  getMovieById(id: number): Observable<MovieDto> {
    return this.httpClient.get<MovieDto>(`${this.baseURL}/${id}`);
  }

  updateMovie(id: number, movie: MovieDto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  saveMovie(movie: MovieDto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, movie);
  }
}
