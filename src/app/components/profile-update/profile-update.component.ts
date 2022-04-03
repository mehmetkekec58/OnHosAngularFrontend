import { ProfileService } from './../../services/profile.service';
import { ProfileDetailModel } from 'src/app/models/profileDetailModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  profileUpdateForm: FormGroup;
  fileToUpload: File | null = null;
  profileDetails: ProfileDetailModel;
  constructor(private formBuilder: FormBuilder, private location: Location, private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.createprofileUpdateForm();
  }

  createprofileUpdateForm() {

    this.profileUpdateForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      aboutMe: ["", Validators.required],
      file: [null, Validators.required]
    })
  }
  handleFileInput(files: FileList) {
    console.log(files)
    this.fileToUpload = files.item(0);
  }
  back(): void {
    this.location.back()

  }
  update() {
    console.log(this.profileUpdateForm.value)
    if (this.profileUpdateForm.valid) {
      console.log(this.profileUpdateForm.value)
      let profileUpdateModel = Object.assign({}, this.profileUpdateForm.value)
      this.profileService.profileUpdate(this.fileToUpload, profileUpdateModel).subscribe(reponse => {
    
      })
    }

  }
}
