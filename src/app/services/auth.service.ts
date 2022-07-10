import { environment } from './../../environments/environment';
import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}Auth/`
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
   return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}login`,loginModel)
  }
  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}register`,registerModel);
  }
}
