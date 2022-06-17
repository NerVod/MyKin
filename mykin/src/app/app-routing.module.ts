import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path:"home", canActivate: [ AuthGuard ], component: HomeComponent },
  {path: "register", component: RegisterComponent},
  {path: "login", component: LogInComponent},
  {path: "contact", component: ContactComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
