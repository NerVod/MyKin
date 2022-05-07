import { Component, OnInit } from '@angular/core';
import { WallPost } from './models/wall-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myPost!: WallPost;
  myOtherPost!: WallPost;
  myLastPost!: WallPost;

    ngOnInit(): void {
      this.myPost = new WallPost(
        'Tahiti',
        "Destination de rêve pour les vacances",
        new Date(),
        0,
        "https://www.capitainestudy.fr/wp-content/uploads/2019/10/tahiti-coline.jpg",
        'Tahiti'
      ),
      this.myOtherPost = new WallPost(
        'Paris Games Week',
        "Le rendez-vous annuel de la culture Gaming",
        new Date(),
        0,
        "https://www.usine-digitale.fr/mediatheque/0/3/0/000320030_homePageUne/paris-games-week-2015.jpg",
        'Paris'
      ),
      this.myLastPost = new WallPost(
        'Fraisier',
        "Prise de poids d'un simple regard",
        new Date(),
        0,
        "https://gateaux-et-delices.com/wp-content/uploads/2015/04/G%C3%A2teau-aux-fraises-pour-accueillir-le-beau-temps1.jpg",
        
      )
    }

}
