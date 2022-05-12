import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/Person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personForm : FormGroup

  constructor(private _builder : FormBuilder,private _servicePerson : PersonService) { }

  ngOnInit(): void {
    this.personForm = this._builder.group({
      lastName : ['',Validators.required],
      firstName : ['',Validators.required]
      
    })
  }

  AddPerson(){
    this._servicePerson.Insert(this.personForm.value)
  }
}


