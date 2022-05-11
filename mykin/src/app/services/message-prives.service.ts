import { Injectable } from '@angular/core';
import { MessagePrive } from '../models/message-prive.model';

@Injectable({
  providedIn: 'root'
})
export class MessagePriveService {
  messagePrives: MessagePrive[] = [
{
  user  : 'Utilisateur',
  createdDate  : new Date(), 
  title  : 'Titre du message privé',
  message : 'Le message privé juste pour toi avec du texte pour voir la card un peu plus grande et concore du texte pour avoir une card encore plus grande'
},
{
  user  : 'Robert Tripoux',
  createdDate  : new Date(), 
  title  : 'Vive le saucisson',
  message : 'Grande invitation à la parade annuelle du saucisson fumé, pour tous les ourmandes de 7 à 77 ans !'
},
{
  user  : 'Gérard Saint-Brice',
  createdDate  : new Date(), 
  title  : 'Retour de la Paris Games WEEEEEK !!!',
  message : "C'est officiel, la Paris Games Week aura bien une nouvelle édition en 2022 !! Le retour de notre petits journée père & fils après deux ans de pause pour Covid, Yeepikai !"
},
];


getAllMessagesPrives(): MessagePrive[]{
  return this.messagePrives
}

}
