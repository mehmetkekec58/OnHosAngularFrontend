import { PostModel } from './../models/postModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
apiUrl = `${environment.apiUrl}Posts/`
  constructor(private httpClient:HttpClient) { }

  getAllPostByUserName(userName:string){
  return this.httpClient.get<ListResponseModel<PostModel>>(`${this.apiUrl}getallbyusername?userName=${userName}`);
}}
