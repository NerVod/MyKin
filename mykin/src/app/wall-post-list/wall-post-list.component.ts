import { Component, OnInit } from '@angular/core';
import { WallPost } from '../models/wall-post.model';
import { WallPostsService } from '../services/wall-posts.service';

@Component({
  selector: 'app-wall-post-list',
  templateUrl: './wall-post-list.component.html',
  styleUrls: ['./wall-post-list.component.scss']
})
export class WallPostListComponent implements OnInit {

  wallPosts! : WallPost[]

  constructor(private wallPostService: WallPostsService) { }

  ngOnInit(): void {
    this.wallPosts = this.wallPostService.getAllWallPosts();

  }

}
