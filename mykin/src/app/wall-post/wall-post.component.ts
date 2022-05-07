import { Component, OnInit, Input } from '@angular/core';
import { WallPost } from '../models/wall-post.model';

@Component({
  selector: 'app-wall-post',
  templateUrl: './wall-post.component.html',
  styleUrls: ['./wall-post.component.scss']
})
export class WallPostComponent implements OnInit {

  @Input() wallPost!: WallPost;


  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;
  location!:string;

  buttonText!: string;
  likeState!: number;

  constructor() { }

  ngOnInit(): void {
    this.buttonText= 'I Like That'
    this.likeState= 1
  }

  onLike(){
    if( this.likeState === 1 ){
          this.buttonText= "Oups, Je ne suis pas fan ...";
          this.wallPost.likes++;
          this.likeState = 2;

    } else {
          this.buttonText = "I Like That !";
          this.likeState = 1;
          this.wallPost.likes--
    };
  }

}
