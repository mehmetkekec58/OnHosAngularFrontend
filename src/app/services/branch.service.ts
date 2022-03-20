import { SingleResponseModel } from './../models/singleResponseModel';
import { environment } from './../../environments/environment';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BranchModel } from '../models/branchModel';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
apiUrl=`${environment.apiUrl}Branches/`
  constructor(private httpClient:HttpClient) { }

  getBranchByUserName(userName:string){
    return this.httpClient.get<SingleResponseModel<BranchModel>>(`${this.apiUrl}getbranchbyusername?userName=${userName}`);
  }
}
