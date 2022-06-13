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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
