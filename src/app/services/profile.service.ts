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
  apiUrl = `${environment.apiUrl}Users/`;
  constructor(private httpClient: HttpClient) { }

  getProfileDetailsByUserName(userName: string) {
    return this.httpClient.get<SingleResponseModel<ProfileDetailModel>>(`${this.apiUrl}profiledetailbyusername?userName=${userName}`)
  }
  getClaimsByUserName(userName: string) {
    return this.httpClient.get<ListResponseModel<ClaimModel>>(`${this.apiUrl}getclaimnamebyusername?userName=${userName}`);
  }
  profileUpdate(fileToUpload: File, profileUpdateModel:any){
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post(`${this.apiUrl}update`,{formData,profileUpdateModel})
  }
  getUserNameByToken(){
    return this.httpClient.get<SingleResponseModel<string>>(`${this.apiUrl}getusernamebytoken`)
  }
}
