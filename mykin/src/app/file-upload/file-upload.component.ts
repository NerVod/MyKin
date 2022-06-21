import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UploadService } from '../services/upload/upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  file!: File
  

  constructor(private uploadService: UploadService) { }

  onFileChange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload() {
    if(this.file) {
      this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert('fichier chargé')
      })
    } else {
      alert('Veuillez choisir un fichier')
    }
  }

  ngOnInit(): void {
  }

}
