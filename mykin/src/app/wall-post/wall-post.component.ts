import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { WallPost } from '../models/wall-post.model';
import { WallPostsService } from '../services/wall-posts.service';

@Component({
  selector: 'app-wall-post',
  templateUrl: './wall-post.component.html',
  styleUrls: ['./wall-post.component.scss']
})
export class WallPostComponent implements OnInit {

  @Input() wallPost!: WallPost;

  buttonText!: string;
  likeState!: number;

  constructor(private wallPostService: WallPostsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.buttonText= 'I Like That';
    this.likeState= 1;
  }

  onLike(){
    // if( this.likeState === 1 ){
    // this.wallPostService.likeWallPostById(this.wallPost._id, 'like')
    //       this.likeState = 2;

    // } else {
    //       this.buttonText = "I Like That !";
    //       this.likeState = 1;
    //       this.wallPostService.likeWallPostById(this.wallPost._id, 'unlike')
    // };
  }

}
