import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../models/videoModel';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = `${environment.apiUrl}Videos/`;
  constructor(private httpClient:HttpClient) { }

  getNumberOfVideoByUserName(userName:string){
    return this.httpClient.get<SingleResponseModel<number>>(`${this.apiUrl}getnumberofvideobyusername?userName=${userName}`);
  }
  getAllByUserName(userName:string){
    return this.httpClient.get<ListResponseModel<VideoModel>>(`${this.apiUrl}getallbyusername?userName=${userName}`)
  }
}
