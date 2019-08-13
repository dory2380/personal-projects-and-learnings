import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  dataClick() {
    return console.log('dataClicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
