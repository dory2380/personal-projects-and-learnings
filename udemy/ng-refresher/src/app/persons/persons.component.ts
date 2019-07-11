import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  // use typescript to give type as the initial array is
  // empty and type cannot be inferred

  // Input decorator means the property can be bound from outside
  @Input() personList: string[];

  constructor() { }

  ngOnInit() {
  }

}
