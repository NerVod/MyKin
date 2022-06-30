import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MessagePrive } from '../models/message-prive.model';
import { MessagePriveService } from '../services/message-prives.service';


@Component({
  selector: 'app-message-prive-new',
  templateUrl: './message-prive-new.component.html',
  styleUrls: ['./message-prive-new.component.scss']
})
export class MessagePriveNewComponent implements OnInit {

  friendPrenom!: string;
  friendName!: string

  messagePriveForm!: FormGroup;
  messagePrivePreview$!: Observable<MessagePrive>

  constructor(private formBuilder: FormBuilder, private messagePriveService: MessagePriveService, private router: Router) { }

  ngOnInit(): void {
    this.messagePriveForm = this.formBuilder.group({
      title: [null, Validators.required],
      message: [null, Validators.required]
    }, 
    {
      updateOn: 'blur'
    });
    this.messagePrivePreview$ = this.messagePriveForm.valueChanges.pipe(
      map(formvalue => ({
        ...formvalue,
        createdAt: new Date()
      }))
    )
    

    console.log("destinataire ami mail : ", localStorage['ami'])
    console.log("PrenomAmi : ", localStorage['PrenomAmi'])

    this.friendPrenom = localStorage['PrenomAmi'];
    this.friendName = localStorage['NameAmi']


  }



  onSubmitForm(): void {
    console.log(this.messagePriveForm.value)
    this.messagePriveService.addMessage(this.messagePriveForm.value).subscribe();
    this.router.navigateByUrl('/contact')
  }

}
