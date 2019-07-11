import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  onCreatePerson(personName: string) {
    console.log('created a person ' + personName);
  }

}

// app-person-input is kebab case - separate with dashes
// Every subwork starts with cap letter - pascal case
