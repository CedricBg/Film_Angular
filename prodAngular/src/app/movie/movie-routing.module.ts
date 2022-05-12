import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { CommentComponent } from './components/comment/comment.component';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  { path : 'List' , component : ListFilmComponent},
  { path : 'Comment' , component : CommentComponent},
  {path : 'Person' , component : PersonComponent},
  { path : 'AddMovie' , component : AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
