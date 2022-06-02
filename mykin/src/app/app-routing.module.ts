import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path:"home", component: LogInComponent },
  {path: "add-user", component: RegisterComponent},
  {path: "login", component: LogInComponent},
  {path: "register", component: RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
