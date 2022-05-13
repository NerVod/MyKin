import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor( private fb: FormBuilder) { }

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
    let formData = this.registerForm.value
    delete formData.password1;
    console.log(formData);
    
    /////////////////////////////////////////
    // traitement envoi serveur

    //////////////////////////////////////////
  }

}
