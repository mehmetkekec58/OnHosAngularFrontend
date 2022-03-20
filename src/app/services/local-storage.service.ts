import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getLocalStorageToken(){
    return localStorage.getItem("token");
  }
  deleteLocalStorageToken(){
    localStorage.removeItem("token");
  }
  setLocalStorageToken(token:string){
    localStorage.setItem("token",token);
  }
  isThereToken(){
    if (this.getLocalStorageToken())
      return true;
    else
      return false;

  }

  setLocalStorage(name:string,data:any){
    localStorage.setItem(name,data);
  }
  getLocalStorage(name:string){
    return localStorage.getItem(name);
  }
  deleteLocalStorage(name:string){
    localStorage.removeItem(name);
  }
}
