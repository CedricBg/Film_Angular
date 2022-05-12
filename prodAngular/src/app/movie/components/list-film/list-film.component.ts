import { Component, OnInit } from '@angular/core';
import {  NbDialogService, NbWindowService } from '@nebular/theme';
import { Acteur } from 'src/app/models/Acteur.models';
import { AllMovies } from 'src/app/models/AllMovies.models';import { Commentaire } from 'src/app/models/Commentaire.models';
import { Film } from 'src/app/models/Film.models';
import { ComnentService } from 'src/app/services/Commentaire.service';
import { FilmService } from 'src/app/services/film.service';
import { UserService } from 'src/app/services/user.service';
import { DetailFilmComponent } from '../detail-film/detail-film.component';


@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {
  id! : number
  ListFilm! : AllMovies[]
  film! : Film
  commen! : Commentaire
 
  constructor(
    private _serviceFilm : FilmService,private _windowService: NbWindowService, private _dialog : NbDialogService,
     private _commentService : ComnentService, private _serviceUser : UserService
  ) { this.getAll() }

  ngOnInit(): void {
  }
  getComment(id : number){
    
    this._commentService.getOne(id).subscribe({
      next : (data : Commentaire )=>{
        this.commen = data
        this.details(id)
      }
    })
    }

details(id : number, hasBackdrop : boolean = false){
  let ref = this._dialog.open(DetailFilmComponent, { hasBackdrop,
    context : {
      listFilm : this.ListFilm[id],
      commentair : this.commen
    }
  })
}

  getAll(){
    this._serviceFilm.getAll().subscribe({
      next : (data : AllMovies[]) => {
        this.ListFilm = data
        
      }
    })
  }


}


