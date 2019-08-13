import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    if (this.loginForm.valid) {
      this.authService.login(username, password);
    }
  }
}
