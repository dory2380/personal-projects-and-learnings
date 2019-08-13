import { Component, OnInit } from '@angular/core';
// import {POSTS_HARDCODED} from 'src/app/temp-data';
import { Post } from '../post' ;
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private postsService: PostsService ) { }

  ngOnInit() {
    // this.loadedPosts = this.postsService.posts;
    this.postsService.fetchPosts().subscribe(receivedPosts => {
      this.loadedPosts = receivedPosts;
    });
  }
}
