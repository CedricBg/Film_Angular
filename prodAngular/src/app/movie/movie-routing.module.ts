import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ListFilmComponent } from './components/list-film/list-film.component';

const routes: Routes = [
  { path : 'List' , component : ListFilmComponent, children : [
  ]},
  
  { path : 'AddMovie' , component : AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
