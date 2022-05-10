import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _httpClient : HttpClient) {  }

 

  getAll(){
    return this._httpClient.get<Person[]>(environment.baseAdres+ 'Person')
  }

}
