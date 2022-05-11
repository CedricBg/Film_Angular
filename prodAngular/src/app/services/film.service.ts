import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Acteur } from '../models/Acteur.models';
import { AllMovies } from '../models/AllMovies.models';
import { Film } from '../models/Film.models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  Id! : number
  constructor(private _httpClient : HttpClient) { }

getAll(){
  return this._httpClient.get<AllMovies[]>(environment.baseAdres+ 'Movie')
}

insertMovie(film : Film){
  return this._httpClient.post<number>(environment.baseAdres+ 'Movie', film).subscribe({
    next : (data : number)=>{
      this.Id = data
    }
  })
  }

  insertActor( acteur : Acteur){
    return this._httpClient.post(environment.baseAdres+'Movie', acteur )
  }

}
