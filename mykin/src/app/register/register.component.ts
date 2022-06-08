import { Component, NgZone, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup = this.formBuilder.group({
  //   userName: ['', [Validators.required, Validators.minLength(3)]],
  //   email: ['',[Validators.required, Validators.email]],
  //   password:['',[ Validators.required, Validators.minLength(8)]],
  //   password1:['',[ Validators.required, Validators.minLength(8)]]
  // })
  registerForm: FormGroup;

  constructor( 
    public formBuilder: FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private crudService: CrudService,  
    private http :HttpClient) {
      this.registerForm = this.formBuilder.group({
        userName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['',[Validators.required, Validators.email]],
        password:['',[ Validators.required, Validators.minLength(8)]],
        // password1:['',[ Validators.required, Validators.minLength(8)]]
      })
     }

  ngOnInit(): void {  }

  get userName(): any {
    return this.registerForm.get('userName');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  // get password1(): any {
  //   return this.registerForm.get('password1');
  // }

  registerFormSubmit(form: FormGroup): void {
    console.log(this.registerForm.value)
    // let formData: any = this.registerForm.value
    // console.log('formdata methode registerformsubmit avant delete pass1',formData);
    // delete formData.password1;
    // console.log('formdata methode registerformsubmit apres delete pass1',formData);
    this.crudService.AddUser(this.registerForm.value)
    // .subscribe(() => {
    //   console.log('User ajouté avec succès')
    //   this.ngZone.run(() => this.router.navigateByUrl('/login'))
    // }, (err) => {
    //   console.log(err)
    // })
    .subscribe({
      next: (v) => console.log('User ajouté avec succès :', v),
      error: (e) => console.error('error crudservice adduser :',e),
      complete: () => this.ngZone.run(() => this.router.navigateByUrl('/login'))
    
    })

    console.log('FormData dans registerFormSubmit :',this.registerForm.value);
    
  




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
