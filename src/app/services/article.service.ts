import { SingleResponseModel } from './../models/singleResponseModel';
import { ArticleModel } from './../models/articleModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private  apiUrl = `${environment.apiUrl}Articles/`
  constructor(private httpClient: HttpClient) { }

  getArticleByUserName(userName:string){
    return this.httpClient.get<ListResponseModel<ArticleModel>>(`${this.apiUrl}getbyusername?userName=${userName}`)
  }
  getNumberOfArticlesByUserName(userName:string){
    return this.httpClient.get<SingleResponseModel<number>>(`${this.apiUrl}getnumberofarticlesbyusername?userName=${userName}`)
  }
}
