import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isConnected! : boolean
  isAdmin! : boolean
  constructor(
    private _serviceAuth : AuthService, private _userService : UserService
  ) { }

  ngOnInit(): void {

    this._serviceAuth.isConnectedSubject.subscribe({
      next : (data : boolean)=>{this.isConnected = data}
    })
    this._serviceAuth.isAdminSubject.subscribe({
      next : (data : boolean)=>{this.isAdmin = data}
    })
  }

}
