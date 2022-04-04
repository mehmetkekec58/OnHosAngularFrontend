import { PostService } from './../../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/postModel';
import { ProfileDetailModel } from 'src/app/models/profileDetailModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:PostModel[]=[];
like:number=2000
  constructor(private postService:PostService) { }
  @Input() profileDetails: ProfileDetailModel;
  @Input() branch: string;
  ngOnInit(): void {

    this.getAllPostByUserName(this.profileDetails.userName)
  }
getAllPostByUserName(userName:string){

this.postService.getAllPostByUserName(userName).subscribe(response=>{
this.posts= response.data

})
}
}
