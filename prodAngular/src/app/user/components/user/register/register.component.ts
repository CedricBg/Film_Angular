import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister! : FormGroup
  user! : User
  id! : number
  physicalPositions = NbGlobalPhysicalPosition;
  
  constructor(
   private _serviceUser : UserService, private _builder : FormBuilder, private _activatedRoute : ActivatedRoute,private toastrService : NbToastrService
  ) { }

  ngOnInit(): void {
    this.formRegister = this._builder.group({
      firstName : ['', Validators.required],
      lastName :  ['',Validators.required],
      email :     ['', [Validators.required,Validators.email]],
      birthDate : ['', Validators.required],
      password :  ['', Validators.required],
    })
  }

  showToast(status : NbComponentStatus ,physicalPositions) {
    this.toastrService.show(status, 'Utilisateur à bien été enrgistré',{status});
  }

  Insert(){
    this.showToast('success',this.physicalPositions.TOP_RIGHT)
    return this._serviceUser.insert(this.formRegister.value)
    
  }
}
