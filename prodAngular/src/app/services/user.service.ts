import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

 users! : User

constructor(private _httpClient : HttpClient, private _router : Router,private _authService : AuthService, private _route : Router) { }
  ngOnInit(): void {
        
  }

getOne(id : number) : Observable<User> {
  return this._httpClient.get<User>(environment.baseAdres+'User/'+id)
}

getAll() : Observable<User[]> {
  return this._httpClient.get<User[]>(environment.baseAdres+ 'User')
}

update(user : User)
  {
    this.users = user
         this._httpClient.put(environment.baseAdres+ 'User' , user).subscribe({
        next : () => {
        localStorage.setItem('id',        this.users.id.toString())
        localStorage.setItem('lastName',  this.users.lastName)
        localStorage.setItem('firstName', this.users.firstName)
        localStorage.setItem('birthDate', this.users.birthDate.toString())
        localStorage.setItem('IsAdmin',   this.users.isAdmin.toString())
        localStorage.setItem('isConnected', 'true')
        this._authService.EmittionConnection()
        this._authService.EmittionUser()
        this._authService.EmittionAdmin()
    }
  })
}

insert(user : User){
  return this._httpClient.post<string>(environment.baseAdres+ 'User/register', user).subscribe()
}
}