import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'myapp'; // this is the TypeScript way
  // appTitle = 'myapp'; // this is the javascript way

  constructor() { }

  ngOnInit() {
  }

}
