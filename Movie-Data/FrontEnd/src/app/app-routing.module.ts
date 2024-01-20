import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { NavbarComponent } from './navbar/navbar.component';

const route: Routes=[
    {path: 'movies',component: MovieListComponent},
    {path: 'create-movie', component: CreateMovieComponent},
    {path: 'update-movie/:id',component: UpdateMovieComponent},
    {path: 'navbar',component: NavbarComponent},
  
    {path: '', redirectTo: 'movies', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
