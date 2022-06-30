import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WallPost } from "../models/wall-post.model";
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class WallPostsService {

  constructor(private http: HttpClient) {}
  
    wallPosts: WallPost[] = [
        { 
          title : 'Tahiti',
          description : "Destination de rêve pour les vacances",
          createdDate : new Date(),
          // likes :0,
          imageUrl : "https://www.capitainestudy.fr/wp-content/uploads/2019/10/tahiti-coline.jpg",
          location :'Tahiti',
          author: 'Benjamin',
          // id: 1,
          // _id:'1'
      },
        { 
          title :'Paris Games Week',
          description :"Le rendez-vous annuel de la culture Gaming",
          createdDate : new Date(),
          // likes :0,
          imageUrl : "https://www.usine-digitale.fr/mediatheque/0/3/0/000320030_homePageUne/paris-games-week-2015.jpg",
          location :'Paris',
          author: 'Benjamin',
          // id: 2,
          // _id:'1'
        },
          {
          title :'Fraisier',
          description :"Prise de poids d'un simple regard",
          createdDate :new Date(),
          // likes :0,
          imageUrl :"https://gateaux-et-delices.com/wp-content/uploads/2015/04/G%C3%A2teau-aux-fraises-pour-accueillir-le-beau-temps1.jpg",
          author: 'Benjamin',
          // id: 3,
          // _id:'1'
          }  
      ];

      
      
      getAllWallPostsHard(): WallPost[]{
          return this.wallPosts
      }

      getAllWallPosts():any {
        const donnees = {user: localStorage['user']}
          return this.http.post(`${environment.baseURL}user/getuserwallpost`, donnees)
      }

      hasWallPosts(user: any): any {
        const usercible = {user: user}
        return this.http.post(`${environment.baseURL}user/haswallpost`, usercible)
      }

      getFriendPost(): any{
        const donnees = {user: localStorage['ami']}
        return this.http.post(`${environment.baseURL}user/getuserwallpost`, donnees)
      }
      
      
      // getWallPostById(WallPostId: number) : WallPost {
      //   const wallPost = this.wallPosts.find(wallPost => wallPost.id);
      //   if(!wallPost) {
      //     throw new Error('wallpost non trouvé')
      //   } else {
      //     return wallPost
      //   }
      // }
      
      // likeWallPostById(wallPostId: number, likeType: 'like' | 'unlike'): void{
      //   const wallPost = this.getWallPostById(wallPostId);
      //   likeType === 'like' ? wallPost.likes++ : wallPost.likes--;
      // }
      

      addWallPost(formValue: {title : string, description: string, imageUrl: string, location?: string}): any {
        const wallPost: WallPost = {
          ...formValue,
          createdDate: new Date(),
          // likes: 0,
          author: `${localStorage['user']}`,
          nameUser: `${localStorage['name']}`,
          prenomUser: `${localStorage['prenom']}`,
          // id: this.wallPosts[this.wallPosts.length -1].id + 1
          // id: 1
        };
        console.log('champs du wallpost', wallPost);
        return this.http.post(`${environment.baseURL}user/createpost`, wallPost)
        // this.wallPosts.push(wallPost)
      }

     





      
    }