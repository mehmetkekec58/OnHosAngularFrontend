import { TagModel } from './../models/tagModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
private apiUrl = `${environment.apiUrl}Tags/`
  constructor(private httpClient:HttpClient) { }

  TagDelete(){

   return this.httpClient.post(`${this.apiUrl}delete`, {id:3, tagName:"selam"});
  }
  getTagsByArticleId(id:number){
    return this.httpClient.get<ListResponseModel<TagModel>>(`${this.apiUrl}gettagsbyarticleid?id=${id}`)
  }
  getTagsByVideoId(id:number){
    return this.httpClient.get<ListResponseModel<TagModel>>(`${this.apiUrl}gettagsbyvideoid?id=${id}`)
  }
}
