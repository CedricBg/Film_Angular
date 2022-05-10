import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request404',
  templateUrl: './request404.component.html',
  styleUrls: ['./request404.component.scss']
})
export class Request404Component implements OnInit {

  constructor(
    private _route : Router
  ) { }


  ngOnInit(): void {


  }

}
