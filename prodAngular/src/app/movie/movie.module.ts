import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { config } from 'rxjs';
import { NbButtonModule, NbCardModule, NbDialogModule, NbInputModule, NbOptionModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListFilmComponent,
    DetailFilmComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NbWindowModule.forRoot(),
    NbDialogModule.forChild(),
    NbButtonModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbOptionModule,
  ]
})
export class MovieModule { }
