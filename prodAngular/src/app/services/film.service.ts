import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AllMovies } from '../models/AllMovies.models';
import { Film } from '../models/Film.models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private _httpClient : HttpClient) { }

getAll(){
  return this._httpClient.get<AllMovies[]>(environment.baseAdres+ 'Movie')
}

insertMovie(film : Film){
  return this._httpClient.post<Film>(environment.baseAdres+ 'Movie', film).subscribe({
    
  })
  }

}
