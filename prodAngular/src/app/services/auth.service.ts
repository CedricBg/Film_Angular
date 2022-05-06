import { HttpClient } from '@angular/common/http';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { loginInfo } from '../models/loginInfo.model';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  _IsConnected! : boolean
  currentUser! : User;

  get IsConnected() : boolean{
    return localStorage.getItem('IsConnected') == 'true' ? true : false
  }
  
  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.IsConnected)
  currentUserSubject : Subject<User> = new Subject<User>()

 
  EmittionConnection(){
    this.isConnectedSubject.next(this.IsConnected)
  }

 baseAdresse : string = "http://localhost:53448/api/"

constructor(
  private _client : HttpClient
) { }

Login(user : loginInfo){

   this._client.post<any>(this.baseAdresse+ 'Auth/auth', user).subscribe({
    next : (data : any) => {
      this._IsConnected = true, 
      this.EmittionConnection(),
      localStorage.setItem('isConnected', this._IsConnected.toString())
    },
    error :(error) => {console.log(error.message)}
  })
  
}

Logout(){
  this._IsConnected = false
  localStorage.removeItem('isConnected'),
  this.EmittionConnection()
}
 
}


