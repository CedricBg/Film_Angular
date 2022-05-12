import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Person.model';
import { PersonAdd } from '../models/personAdd.models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _httpClient : HttpClient) {  }

  getAll(){
    return this._httpClient.get<Person[]>(environment.baseAdres+ 'Person')
  }

  Insert(person : PersonAdd){
    console.log(person)
   return this._httpClient.post<string>(environment.baseAdres+ 'Person' , person).subscribe({
     next : (data : string)=>{
        console.log(data)
     }
   })
  }
}
