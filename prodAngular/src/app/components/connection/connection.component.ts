import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginInfo } from 'src/app/models/loginInfo.model';
import { User } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
   
  currentUser! : User
  isConnected! : boolean
  connectFormGroup! : FormGroup
  constructor(private _serviceAuth : AuthService, private _builder : FormBuilder, private _serviceUser : UserService) { }
  
  ngOnInit(): void {
    this.isConnected = this._serviceAuth.IsConnected
    this.connectFormGroup = this._builder.group({
      email : ['', [Validators.required,Validators.email]],
      password : ['',Validators.required]
     })

     this._serviceAuth.isConnectedSubject.subscribe({
       next : (data : boolean) => {this.isConnected = data
        }
     })
     this._serviceAuth.currentUserSubject.subscribe({
       next : (data : User) => { this.currentUser = data
        console.log(data)
      }
     })
     
     
  }
  
  login(){
    this._serviceAuth.Login(this.connectFormGroup.value)
  } 

  Logout(){
    this._serviceAuth.Logout()
  }

 

}
