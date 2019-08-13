import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      newValue => this.isLoggedIn = newValue
    );
  }

  // onLogin() {
  //   // this.authService.login();
  //   // to change the BehaviorSubject Obserable's next value to false
  // }
  //
  onLogout() {
    this.authService.logout();
    // to change the BehaviorSubject Observable's next value to true
  }
}
