import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubscription: Subscription;

  constructor(private prsService: PersonsService) {
  }

  // here the isFetching will display the text on page while the data is getting fetched. Once it is fetched "personList = persons", is false.
  ngOnInit() {
    this.personListSubscription = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons(); //this will call the getPersons get request
  }

  onRemovePerson(name: string) {
    this.prsService.removePerson(name);
  }

  ngOnDestroy() {
    this.personListSubscription.unsubscribe(); //stop listening
  }

}
