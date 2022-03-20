import { ProfileDetailModel } from 'src/app/models/profileDetailModel';
import { VideoService } from './../../../services/video.service';
import { Component, Input, OnInit } from '@angular/core';
import { VideoModel } from 'src/app/models/videoModel';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
videos:VideoModel[]=[]
videoTags:string[]=[]
  constructor(private videoService:VideoService) { }
@Input() profileDetails:ProfileDetailModel
@Input() branch:string=""
  ngOnInit(): void {
    this.getAllByUserName(this.profileDetails.userName);
  }
getAllByUserName(userName:string){
  this.videoService.getAllByUserName(userName).subscribe(response=>{
  this.videos=response.data
  response.data.forEach(e=>{
    this.videoTags=e.tag.split(",");
  })
  })
}
}
