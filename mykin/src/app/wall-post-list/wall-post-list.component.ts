import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WallPost } from '../models/wall-post.model';
import { WallPostsService } from '../services/wall-posts.service';

@Component({
  selector: 'app-wall-post-list',
  templateUrl: './wall-post-list.component.html',
  styleUrls: ['./wall-post-list.component.scss']
})
export class WallPostListComponent implements OnInit {

  wallPosts! : WallPost[];
  wallPosts$! : Observable<WallPost[]>;
  hasWallPosts$!: any;


  constructor(private wallPostService: WallPostsService) { }

  ngOnInit(): void {
    // this.wallPosts = this.wallPostService.getAllWallPostsHard();
    this.wallPosts$ = this.wallPostService.getAllWallPosts();
    this.wallPostService.hasWallPosts(localStorage['user']).subscribe((data: Object) => this.hasWallPosts$=(Object.entries(data)[0][1]))   

  }

}
