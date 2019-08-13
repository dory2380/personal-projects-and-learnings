import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  enteredPersonName = '';

  constructor (private personsService: PersonsService) {

  }
  onCreatePerson() {
    console.log('created a person ' + this.enteredPersonName);
    this.personsService.addPersons(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}

// app-person-input is kebab case - separate with dashes
// Every subwork starts with cap letter - pascal case
