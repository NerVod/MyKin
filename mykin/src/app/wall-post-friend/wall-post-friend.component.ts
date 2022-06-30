import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WallPost } from '../models/wall-post.model';
import { WallPostsService } from '../services/wall-posts.service';

@Component({
  selector: 'app-wall-post-friend',
  templateUrl: './wall-post-friend.component.html',
  styleUrls: ['./wall-post-friend.component.scss']
})
export class WallPostFriendComponent implements OnInit {

  wallPosts! : WallPost[];
  wallPosts$! : any;
  hasWallPosts$!: any
  friendPrenom!: string;
  friendName!: string

  constructor(private route: ActivatedRoute, private wallPostService: WallPostsService) { }

  ngOnInit(): void {
    //  this.wallPosts = this.wallPostService.getAllWallPostsHard();
    console.log("ami ? :", localStorage['ami'])
    this.friendPrenom = localStorage['PrenomAmi']
    this.friendName = localStorage['NameAmi']
    this.wallPosts$ = this.wallPostService.getFriendPost()
    this.wallPostService.hasWallPosts(localStorage['ami']).subscribe((data: Object) => this.hasWallPosts$=(Object.entries(data)[0][1])) 


  }

  // deletestore(){
  //   setTimeout(() => {
  //     localStorage.removeItem('ami')
  //   }, 3000);
  // }

}
