import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigateByUrl('/login')
  }

}
