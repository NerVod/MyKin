import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private http :HttpClient,
    private User: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[ Validators.required, Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {  }

  get email(): any {
    return this.loginForm.get('email');
  }
  get password(): any {
    return this.loginForm.get('password');
  }

  loginFormSubmit(form: FormGroup) : void {

    this.User.userLogin(this.loginForm.value).subscribe({
      next:(v) => {
        let token = Object.entries(v)[1][1];
        let user = Object.entries(v)[2][1]['email'];
        localStorage.setItem('Token', token);
        localStorage.setItem('user', user)
      },
      error:(e) => console.log('erreur login user :', e),
      complete: () => this.ngZone.run(() => this.router.navigateByUrl('/home'))
    })
  }


  
}
