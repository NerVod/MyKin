import { Injectable } from '@angular/core';
import { MessagePrive } from '../models/message-prive.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessagePriveService {

  constructor(private http: HttpClient) {}

  messagePrives: MessagePrive[] = [
{
  prenomUser  : 'Utilisateur',
  nameUser  : 'user secret',
  createdAt  : new Date(), 
  title  : 'Titre du message privé',
  message : 'Le message privé juste pour toi avec du texte pour voir la card un peu plus grande et concore du texte pour avoir une card encore plus grande'
},
{
  prenomUser  : 'Robert ',
  nameUser  : 'Tripoux',
  createdAt  : new Date(), 
  title  : 'Vive le saucisson',
  message : 'Grande invitation à la parade annuelle du saucisson fumé, pour tous les ourmandes de 7 à 77 ans !'
},
{
  prenomUser  : 'Gérard',
  nameUser  : 'Saint-Brice ',
  createdAt  : new Date(), 
  title  : 'Retour de la Paris Games WEEEEEK !!!',
  message : "C'est officiel, la Paris Games Week aura bien une nouvelle édition en 2022 !! Le retour de notre petits journée père & fils après deux ans de pause pour Covid, Yeepikai !"
},
];
 


getAllMessagesPrivesHard(): MessagePrive[]{
  return this.messagePrives
}

getUserMessagesPrives(): any {
  const donnees = {destinataire: localStorage['user']}
  return this.http.post(`${environment.baseURL}user/getusermessages`, donnees)
}

hasMessages(user: any): any {
  const usercible= {destinataire: user}
  return this.http.post(`${environment.baseURL}user/hasmessages`, usercible)
}


addMessage(formValue: { title: string, message: string}): any {

  const MessagePrive: MessagePrive = {
    ...formValue,
    author: `${localStorage['user']}`,
    nameUser: `${localStorage['name']}`,
    prenomUser: `${localStorage['prenom']}`,
    ami: `${localStorage['ami']}`
  };
  // console.log('champs du MessagePrive', MessagePrive);
  return this.http.post(`${environment.baseURL}user/createmessage`, MessagePrive)
}

deleteMessage(idMessage: string | undefined) {
const donnees = {MessageId : idMessage }
return this.http.post(`${environment.baseURL}user/deletemessage`, donnees)


}

}
