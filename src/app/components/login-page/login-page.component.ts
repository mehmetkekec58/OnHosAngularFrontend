import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from './../../services/local-storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators  } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private router:Router,private snackBar:MatSnackBar,private formBuilder:FormBuilder, private authService:AuthService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createloginFrom();
  }
  createloginFrom(){

    this.loginForm= this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
   login(){
    if(this.loginForm.valid){
      //console.log(this.loginForm.value)
      let loginModel=Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        this.localStorageService.setLocalStorageToken(response.data.token)
        this.localStorageService.setLocalStorage("bitisSuresi",response.data.expiration)
        window.location.reload();
      }, responseError=>{
 //console.log(responseError.error.message)
this.openSnackBar(responseError.error.message)
      })
          }
  }
  openSnackBar(metin: string) {
    this.snackBar.open(`${metin}`, "Tamam", {
      duration: 5 * 1000,
    });
  }

}
