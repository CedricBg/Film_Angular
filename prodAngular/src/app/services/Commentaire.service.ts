import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commentaire } from '../models/Commentaire.models';


@Injectable({
  providedIn: 'root'
})
export class ComnentService {

  constructor(private _http : HttpClient ) { }

  getOne(id : number){
    console.log(id)
    return this._http.get<Commentaire>(environment.baseAdres+'Comment/'+id)
  }
  insert(message : string){
    return this._http.post(environment.baseAdres+'Comment', message)
  }
  delete(id : number){
    return this._http.delete(environment.baseAdres+'Comment/'+id)
  }
}
