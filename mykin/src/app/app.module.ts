import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WallPostComponent } from './wall-post/wall-post.component';
import { WallPostListComponent } from './wall-post-list/wall-post-list.component';
import { MessagePriveComponent } from './message-prive/message-prive.component';
import { MessagePriveListComponent } from './message-prive-list/message-prive-list.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    WallPostComponent,
    WallPostListComponent,
    MessagePriveComponent,
    MessagePriveListComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
 }
