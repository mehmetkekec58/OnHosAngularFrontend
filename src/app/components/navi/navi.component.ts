import { Component } from '@angular/core';



@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {


$drawer:boolean=false;
isLogin=false;
  constructor() {}
click(){
  this.$drawer=!this.$drawer
 // console.log("first")
}
scroll(){

}
}
