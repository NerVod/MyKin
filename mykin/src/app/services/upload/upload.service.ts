import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }
  
  public uploadfile(file: File){
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post(`${environment.baseURL}user/upload`, formParams)
  }
}
