import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';
import { ProfileDetailModel } from 'src/app/models/profileDetailModel';
import { VideoService } from './../../../services/video.service';
import { Component, Input, OnInit } from '@angular/core';
import { VideoDtoModel } from 'src/app/models/videoModelDto';
import { VideoModel } from 'src/app/models/videoModel';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  domain = environment.domain;
videos:VideoModel[]=[]
like:number=2000;
link:string="";

  constructor(private videoService:VideoService,private snackBar:MatSnackBar) { }
@Input() profileDetails:ProfileDetailModel
@Input() branch:string=""
  ngOnInit(): void {
    this.getAllByUserName(this.profileDetails.userName);
  }
getAllByUserName(userName:string){
  this.videoService.getAllByUserName(userName).subscribe(response=>{
  this.videos=response.data
  })
}
shareButton(videoId:number){
  this.link=`${this.domain}video/${videoId}`;
  navigator.clipboard.writeText(this.link);
  this.openSnackBar("Link panoya kopyalandı")
}
openSnackBar(metin: string) {
  this.snackBar.open(metin, "Tamam", {
    duration: 5 * 1000,
  });
}
}
