import { Injectable } from '@angular/core';
// import { POSTS_HARDCODED as postsData } from 'src/app/temp-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // posts = [];

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
}
