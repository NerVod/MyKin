import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddNewPost(): void {
    this.router.navigateByUrl('/createpost')
  }

}
