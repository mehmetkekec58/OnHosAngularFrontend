import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FollowModel } from '../models/followModel';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  apiUrl = `${environment.apiUrl}Follows/`
  constructor(private httpClient: HttpClient) { }

  getNumberOfFollowersByUserName(userName: string) {
    return this.httpClient.get<SingleResponseModel<number>>(`${this.apiUrl}numberoffollowers?userName=${userName}`)
  }
  onuTakipEdiyorMusun(userName: string) {
    return this.httpClient.get<SingleResponseModel<FollowModel>>(`${this.apiUrl}isfollow?userName=${userName}`);
  }
  unfollow(userName: string) {
    return this.httpClient.get<ResponseModel>(`${this.apiUrl}unfollow?karsiUserName=${userName}`);
  }
  follow(userName: string) {
    return this.httpClient.get<ResponseModel>(`${this.apiUrl}follow?takipEdilecekUserName=${userName}`);
  }
}
