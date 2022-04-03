import { ProfileService } from './../../services/profile.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{


$drawer:boolean=false;
isLogin:boolean=false;
$arama:boolean=false;
userName="";
yetkiliMi=false;

  constructor( private localStorageService:LocalStorageService, private profileService:ProfileService) {
  }
  ngOnInit(): void {
    this.girisYaptiMi()
    this.getUserName()
  }

drawerOpenAndClose(){
  this.$drawer=!this.$drawer
}
aramaIcon(){
this.$arama=!this.$arama
}
girisYaptiMi(){
  if (this.localStorageService.isThereToken()) {
    this.isLogin=true;
  }else{
    this.isLogin=false;
  }
}
cikisYap(){
  this.localStorageService.deleteLocalStorageToken();
  window.location.reload()

}
getUserName(){
  if (this.localStorageService.isThereToken()) {
    this.profileService.getUserNameByToken().subscribe(response=>{
      this.userName=response.data
      this.profileService.getClaimsByUserName(response.data).subscribe(res=>{
        res.data.length>0 ? this.yetkiliMi=true : this.yetkiliMi=false;
      })
    })
  }

}
}



