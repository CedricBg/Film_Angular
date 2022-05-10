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
  formMovie! : FormGroup
  Allpersonne! : Person[]
  listActor! : Acteur[]
  filmInsert : Film
  ngOnInit(): void {
    this.getAllPerson()
    this.formMovie = this._builder.group({
      title : ['', Validators.required],
      description : [],
      releaseYear : ['',Validators.required],
      realisatorID : ['',Validators.required],
      scenaristID : ['',Validators.required],
      actor : this._builder.array([])
    })
  }

  getActor() : FormArray{
    return this.formMovie.get('actor') as FormArray
  }

  addActor() {
    this.getActor().push(new FormControl())
  }

  submitForm(){
    this.filmInsert.id = this.formMovie.value.id
    this.filmInsert.title = this.formMovie.value.title
    this.filmInsert.description = this.formMovie.value.description
    this.filmInsert.releaseYear = this.formMovie.value.releaseYear
    this.filmInsert.realisatorID = this.formMovie.value.realisatorID
    this.filmInsert.scenaristID = this.formMovie.value.scenaristID
    //console.log(this.filmInsert)
    //this._MovieService.insertMovie(this.filmInsert)
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
