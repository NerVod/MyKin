import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    password:['',[ Validators.required, Validators.minLength(8)]],
    password1:['',[ Validators.required, Validators.minLength(8)]]
  })

  constructor( private fb: FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private crudService: CrudService,  
    private http :HttpClient) { }

  ngOnInit(): void {
  }

  get userName(): any {
    return this.registerForm.get('userName');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  get password1(): any {
    return this.registerForm.get('password1');
  }

  registerFormSubmit(form: FormGroup): void {
    let formData: any = this.registerForm.value
    delete formData.password1;
    this.crudService.addUser(formData)
    .subscribe(() => {
      console.log('User ajouté avec succès')
      this.ngZone.run(() => this.router.navigateByUrl('/login'))
    }, (err) => {
      console.log(err)
    })

    console.log(formData);
    
    /////////////////////////////////////////
    // traitement envoi serveur
// this.http.post('http://localhost:3000/register', formData).subscribe(
//   (res) => console.log(res),
//   (err) => console.log(err)
// )

// this.crudService.addUser(this.registerForm.value)
// .subscribe(() => {
//   console.log('User ajouté avec succès')
//   this.ngZone.run(() => this.router.navigateByUrl('/login'))
// }, (err) => {
//   console.log(err)
// })

    //////////////////////////////////////////
  }

}
