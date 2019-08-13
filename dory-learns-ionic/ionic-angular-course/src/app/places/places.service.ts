import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion', 'In the heart of New York City', 
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80', 
      146.99
    ),
    new Place(
      'p2',
      'L Amour Toujours', 
      'A romantic place in Paris',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      189.99      
    ),
    new Place(
      'p3',
      'The Foggy Palace', 
      'Not your average city trip!',
      'https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      99.99      
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id )};
  }

  constructor() { }
}
