import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadRequestPagesComponent } from './components/bad-request-pages/bad-request-pages.component';
import { Request404Component } from './components/bad-request-pages/request404/request404.component';
import { HomeComponent } from './components/home/home.component';
import { DetailFilmComponent } from './movie/components/detail-film/detail-film.component';
import { RegisterComponent } from './user/components/user/register/register.component';
import { UserComponent } from './user/components/user/user.component';


const routes: Routes = [
  { path : 'user' , loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)},
  { path : 'movie' , loadChildren: ()=> import('./movie/movie.module').then(m => m.MovieModule)},
  { path : 'register', component : RegisterComponent},
  { path : 'badRequest', component : BadRequestPagesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
