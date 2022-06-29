import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { WallPost } from '../models/wall-post.model';
import { WallPostsService } from '../services/wall-posts.service';

@Component({
  selector: 'app-wall-post-new',
  templateUrl: './wall-post-new.component.html',
  styleUrls: ['./wall-post-new.component.scss']
})
export class WallPostNewComponent implements OnInit {

  wallpostForm!: FormGroup;
  wallpostPreview$!: Observable<WallPost>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private wallPostService: WallPostsService, private router: Router) { }

  ngOnInit(): void {
    this.urlRegex= /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.wallpostForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location:[null]
    },
    {
      updateOn: 'blur'
    }
    );
    this.wallpostPreview$ =this.wallpostForm.valueChanges.pipe(
      map(formvalue => ({
        ...formvalue,
        createdDate: new Date(),
        likes:0
      }))
    );
  }

  onSubmitForm(): void {
   this.wallPostService.addWallPost(this.wallpostForm.value).subscribe();
   this.router.navigateByUrl('/home')
  }

}
