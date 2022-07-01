import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-liste',
  templateUrl: './nav-liste.component.html',
  styleUrls: ['./nav-liste.component.scss']
})
export class NavListeComponent implements OnInit {

  survol!: boolean

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLogged');
    localStorage.removeItem('name');
    localStorage.removeItem('prenom');
    localStorage.removeItem('PrenomAmi');
    localStorage.removeItem('NameAmi');

    this.router.navigateByUrl('/login')
  }

}
