import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.createRegisterFrom();
  }
  createRegisterFrom(){

    this.registerForm= this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      userName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],

    })
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerModel=Object.assign({}, this.registerForm.value)

  this.authService.register(registerModel).subscribe(response=>{
    this.openSnackBar("Kayıt Olundu")
console.log(response)
  }, responseError=>{
    this.openSnackBar("Kayıt olma başarısız: "+responseError.error)
console.log(responseError.error.message)

  })
}


  }

  openSnackBar(metin: string) {
    this.snackBar.open(`${metin}`, "Tamam", {
      duration: 5 * 1000,
    });
  }
}
