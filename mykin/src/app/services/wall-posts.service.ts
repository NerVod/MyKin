import { Injectable } from "@angular/core";
import { WallPost } from "../models/wall-post.model";

@Injectable({
    providedIn: 'root'
})

export class WallPostsService {
    wallPosts: WallPost[] = [
        { 
          title : 'Tahiti',
          description : "Destination de rêve pour les vacances",
          createdDate : new Date(),
          likes :0,
          imageUrl : "https://www.capitainestudy.fr/wp-content/uploads/2019/10/tahiti-coline.jpg",
          location :'Tahiti'
      },
        { 
          title :'Paris Games Week',
          description :"Le rendez-vous annuel de la culture Gaming",
          createdDate : new Date(),
          likes :0,
          imageUrl : "https://www.usine-digitale.fr/mediatheque/0/3/0/000320030_homePageUne/paris-games-week-2015.jpg",
          location :'Paris'
        },
          {
          title :'Fraisier',
          description :"Prise de poids d'un simple regard",
          createdDate :new Date(),
          likes :0,
          imageUrl :"https://gateaux-et-delices.com/wp-content/uploads/2015/04/G%C3%A2teau-aux-fraises-pour-accueillir-le-beau-temps1.jpg",
          }  
      ];
}