import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _serviceUser : UserService, private _builder : FormBuilder, private _route : Router) {}
 

   listUsers! : User[]
   user! : User

  ngOnInit(): void {
    this.getAll()
  }


  register(){
    this._route.navigate(['register'])
  }


  getAll(){
    this._serviceUser.getAll().subscribe({
      next : (data : User[]) => {
          this.listUsers = data
      }
    })
  }
 

}
