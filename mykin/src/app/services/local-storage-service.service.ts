import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class LocalStorageService{
  private storageSub= new Subject();

  watchStorage(): Observable<any>{
    return this.storageSub.asObservable()
  }


  
  setItem(key: string, data: any){
    localStorage.setItem(key, data);
    this.storageSub.next(data)
  }

  getItem(item:any){
    return localStorage.getItem(item)
  }
}