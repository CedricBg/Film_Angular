import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  formUpdate! : FormGroup
  user! : User
  id! : number
  isConnected! : boolean

  constructor(private _serviceUser : UserService, private _serviceAuth : AuthService, private _builder : FormBuilder, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._serviceAuth.isConnectedSubject.subscribe({
      next : (data : boolean)=>{this.isConnected = data}})
    this._serviceAuth.EmittionConnection()
    this.id = this._activatedRoute.snapshot.params['id']
    this.getOne(this.id)
    this.formUpdate = this._builder.group({
      id : [this.id],
      firstName : ['', Validators.required],
      lastName :  ['',Validators.required],
      email :     ['', [Validators.required,Validators.email]],
      birthDate : ['', Validators.required],
      password :  ['', Validators.required],
      isActive : [],
      isAdmin : []
    })
  
  }
  getOne(id : number){
    this._serviceUser.getOne(id).subscribe({
      next : (data : User) => {
       this.user = data
       this.formUpdate.patchValue(this.user)
      }
    })
  }
 
  Update(){
    console.log(this.formUpdate.value)
    this._serviceUser.update(this.formUpdate.value)
  }

}
