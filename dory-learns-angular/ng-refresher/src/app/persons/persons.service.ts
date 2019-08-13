import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[]; //will be given SWAPI API values

  constructor(private http : HttpClient) {

  }

  fetchPersons() {
    // any is a placeholder for if you don't know the specific format, or too lazy to

    // there are two map methods here. The first is from rxjs which takes a function as an arguement and will receive the same as datasubscribed and we can transform the data and return that. The other map() is the Array.map()
    this.http.get<any>('https://swapi.co/api/people').pipe(map( resultData => {
      return resultData.results.map(character => character.name)
    }))
    .subscribe(
      transformedData => {
      this.personsChanged.next(transformedData); // adding this data from API means we will no longer be able to add persons because whenever we reload persons component that does call fetchPersons, we overwrite the old persons or we emit our new persons which is only the one we fetched
      console.log(transformedData);
    });
  }

  addPersons(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name
    });
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }
}
