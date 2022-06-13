import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private user: UserService) { }

  getProtectedData() {
    this.user.getProtectedData().subscribe((data: any) => console.log(data))
  };

  ngOnInit(): void {
    this.getProtectedData()
  }

}
