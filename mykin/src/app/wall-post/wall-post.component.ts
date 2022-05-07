import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-post',
  templateUrl: './wall-post.component.html',
  styleUrls: ['./wall-post.component.scss']
})
export class WallPostComponent implements OnInit {
  id!: number;
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;
  location!:string;

  buttonText!: string;
  likeState!: number

  constructor() { }

  ngOnInit(): void {
    this.id= 1,
    this.title= 'Tahiti',
    this.description= "Destination de rêve pour les vacances",
    this.createdDate= new Date(),
    this.likes= 0,
    this.imageUrl= "https://www.capitainestudy.fr/wp-content/uploads/2019/10/tahiti-coline.jpg",
    this.location= 'Tahiti'
    this.likeState= 1
  }

  onLike(){
    if( this.likeState === 1 ){
          this.buttonText= "Oups, Je ne suis pas fan ...";
          this.likes++;
          this.likeState = 2;

    } else {
          this.buttonText = "I Snap That !";
          this.likeState = 1;
          this.likes--
    };
  }

}
