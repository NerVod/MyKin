import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { LOCALE_ID, NgModule } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';
import { MessagePriveComponent } from './message-prive/message-prive.component';
import { MessagePriveListComponent } from './message-prive-list/message-prive-list.component';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { WallPostComponent } from './wall-post/wall-post.component';
import { WallPostListComponent } from './wall-post-list/wall-post-list.component';
import * as fr from '@angular/common/locales/fr';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from'@angular/material/progress-bar';
import { InvitAttenteComponent } from './invit-attente/invit-attente.component';
import { InviteAttenteListeComponent } from './invite-attente-liste/invite-attente-liste.component';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { WallPostNewComponent } from './wall-post-new/wall-post-new.component';
import { WallPostFriendComponent } from './wall-post-friend/wall-post-friend.component';
import { MessagePriveNewComponent } from './message-prive-new/message-prive-new.component';
import { NavListeComponent } from './nav-liste/nav-liste.component';
import { PagePostComponent } from './page-post/page-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LogInComponent,
    MessagePriveComponent,
    MessagePriveListComponent,
    RegisterComponent,
    WallPostComponent,
    WallPostListComponent,
    ContactComponent,
    ContactListComponent,
    SingleContactComponent,
    FileUploadComponent,
    InvitAttenteComponent,
    InviteAttenteListeComponent,
    FriendCardComponent,
    FriendListComponent,
    WallPostNewComponent,
    WallPostFriendComponent,
    MessagePriveNewComponent,
    NavListeComponent,
    PagePostComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
