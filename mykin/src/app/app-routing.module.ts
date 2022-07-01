import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { WallPostNewComponent } from './wall-post-new/wall-post-new.component';
import { WallPostFriendComponent } from './wall-post-friend/wall-post-friend.component';
import { MessagePriveComponent } from './message-prive/message-prive.component';
import { MessagePriveListComponent } from './message-prive-list/message-prive-list.component';
import { MessagePriveNewComponent } from './message-prive-new/message-prive-new.component';
import { PagePostComponent } from './page-post/page-post.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path:"home", canActivate: [ AuthGuard ], component: HomeComponent },
  {path: "register", component: RegisterComponent},
  {path: "login", component: LogInComponent},
  {path: "contact", canActivate: [ AuthGuard ], component: ContactComponent},
  {path: "createpost", canActivate: [ AuthGuard ], component: WallPostNewComponent},
  {path: "wallpostfriend/:param", canActivate: [ AuthGuard ], component: WallPostFriendComponent},
  {path: "message", canActivate: [ AuthGuard ], component: MessagePriveListComponent},
  {path: "message/:param", canActivate: [ AuthGuard ], component: MessagePriveListComponent},
  {path: "createmessage", canActivate: [ AuthGuard ], component: MessagePriveNewComponent},
  {path: "posts", canActivate: [ AuthGuard ], component: PagePostComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
