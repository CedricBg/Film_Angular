import { HttpClient } from '@angular/common/http';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginInfo } from '../models/loginInfo.model';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
 
  _currentUser! : User
  get currentUser() : User {
    return this._currentUser ?? JSON.parse(localStorage.getItem('user'))
  }
  set currentUser(value : User) {
    this._currentUser = value
  }
   
  get IsConnected() : boolean {
    return localStorage.getItem('token') != null ? true : false
  }

  get IsAdmin() : boolean{
    return localStorage.getItem('IsAdmin') == 'true' ? true : false
  }
  
  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.IsConnected)
  isAdminSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.IsAdmin)
  currentUserSubject : BehaviorSubject<User> = new BehaviorSubject<User>(this.currentUser)

  EmittionAdmin(){
    this.isAdminSubject.next(this.IsAdmin)
  }

  EmittionUser(){
    this.currentUserSubject.next(this.currentUser)
  }
 
  EmittionConnection(){
    this.isConnectedSubject.next(this.IsConnected)
  }

constructor(
  private _client : HttpClient, private _router : Router
) { }

Login(user : loginInfo){
  
   this._client.post<User>(environment.baseAdres+ 'Auth/auth', user).subscribe({
    next : (data : User) => {
      
      this.currentUser = data
      
      if(this.currentUser.isActive == true)
      {
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('id',        this.currentUser.id.toString())
        localStorage.setItem('token',     this.currentUser.token)
        localStorage.setItem('lastName',  this.currentUser.lastName)
        localStorage.setItem('firstName', this.currentUser.firstName)
        localStorage.setItem('birthDate', this.currentUser.birthDate.toString())
        localStorage.setItem('IsAdmin',   this.currentUser.isAdmin.toString())
        localStorage.setItem('isConnected', this.IsConnected.toString())
        this.EmittionConnection()
        this.EmittionUser()
        this.EmittionAdmin()
        
      }
    },
    error :(error) => {console.log(error.message)}
  })
  
}

Logout(){
  this._router.navigate(['./']) 
  localStorage.clear()
  this.EmittionConnection() 
  this.EmittionUser()
  this.EmittionAdmin()
  }
}


