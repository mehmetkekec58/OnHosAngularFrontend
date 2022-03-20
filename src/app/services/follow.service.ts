import { SingleResponseModel } from './../models/singleResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
apiUrl=`${environment.apiUrl}Follows/`
  constructor(private httpClient:HttpClient) { }

  getNumberOfFollowersByUserName(userName:string){
    return this.httpClient.get<SingleResponseModel<number>>(`${this.apiUrl}numberoffollowers?userName=${userName}`)
  }
}
