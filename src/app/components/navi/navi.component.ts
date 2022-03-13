import { Component } from '@angular/core';



@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {


$drawer:boolean=false;
isLogin:boolean=false;
$arama:boolean=true;
  constructor() {

  }
drawerOpenAndClose(){
  this.$drawer=!this.$drawer
}
aramaIcon(){
this.$arama=!this.$arama
}



}
