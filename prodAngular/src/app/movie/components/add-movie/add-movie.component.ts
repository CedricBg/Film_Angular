import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Acteur } from 'src/app/models/Acteur.models';
import { Film } from 'src/app/models/Film.models';
import { Person } from 'src/app/models/Person.model';
import { FilmService } from 'src/app/services/film.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  
  constructor(private _builder : FormBuilder,private _personService : PersonService, private _MovieService : FilmService) { }
  filmInsert! : Film
  formMovie! : FormGroup
  Allpersonne! : Person[]
  listActor! : Acteur[]
  idfilm! : number
  actor : Acteur
  
  ngOnInit(): void {
    this.getAllPerson()
    this.formMovie = this._builder.group({
      title : ['', Validators.required],
      description : [],
      releaseYear : ['',Validators.required],
      realisatorID : ['',Validators.required],
      scenaristID : ['',Validators.required],
      casting : this._builder.array([])
    })
  }


  getRole(){
    return this.formMovie.get('casting') as FormArray
  }

  addActor() {  
    this.getRole().push(this._builder.group({
      personId : [],
      role : []
    }))
     
  }
 
  submitForm(){

    this.filmInsert = this.formMovie.value
    this.listActor = this.formMovie.value.casting
    this._MovieService.insertMovie(this.filmInsert,this.listActor)
  }


  getAllPerson(){
    this._personService.getAll().subscribe(
      {
        next : (data : Person[]) =>{
        this.Allpersonne = data
        }
      }
    )
  }

}
