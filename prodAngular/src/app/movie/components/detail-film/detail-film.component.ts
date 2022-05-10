import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef,  } from '@nebular/theme';
import { AllMovies } from 'src/app/models/AllMovies.models';
import { Film } from 'src/app/models/Film.models';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
  isConnected! : boolean
  id! : number
  film! : Film
 
  constructor( private _filmService : FilmService, private _dialogRef: NbDialogRef<DetailFilmComponent> ){  }

  @Input() listFilm : AllMovies
  @Input() commentair : any = [] ;

  ngOnInit(): void {
}

  close() {
    this._dialogRef.close();
  }
}
