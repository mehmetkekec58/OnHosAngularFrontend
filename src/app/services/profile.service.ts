import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from './../models/singleResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileDetailModel } from '../models/profileDetailModel';
import { ClaimModel } from '../models/claimModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  ApiUrl = `${environment.apiUrl}Users/`;
  constructor(private httpClient: HttpClient) { }

  getProfileDetailsByUserName(userName: string) {
    return this.httpClient.get<SingleResponseModel<ProfileDetailModel>>(`${this.ApiUrl}profiledetailbyusername?userName=${userName}`)
  }
  getClaimsByUserName(userName: string) {
    return this.httpClient.get<ListResponseModel<ClaimModel>>(`${this.ApiUrl}getclaimnamebyusername?userName=${userName}`);
  }
}
