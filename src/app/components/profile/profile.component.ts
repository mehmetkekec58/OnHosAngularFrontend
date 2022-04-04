import { PostModel } from 'src/app/models/postModel';
import { LocalStorageService } from './../../services/local-storage.service';
import { VideoService } from './../../services/video.service';
import { BranchService } from './../../services/branch.service';
import { FollowService } from './../../services/follow.service';
import { ArticleModel } from './../../models/articleModel';
import { ArticleService } from './../../services/article.service';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDetailModel } from 'src/app/models/profileDetailModel';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BranchModel } from 'src/app/models/branchModel';
import { FollowModel } from 'src/app/models/followModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileDetails: ProfileDetailModel = { userName: "", lastName: "", firstName: "", aboutMe: { id: 0, userName: "", aboutMe: "" }, profilePhoto: { id: 0, url: "", date: null, userName: "" } };
  userName: string = "";
  isThereUser: boolean = true;
  hataMessage: string = ""
  numberOfFollowers: number = 0;
  numberOfArticles: number = 0;
  numberOfVideos: number = 0;
  branch: BranchModel = { id: 0, userName: "", branchName: "" };
  isLoading: boolean = false;
  kendisiMi: boolean = false;
  areYouFollow: boolean = false;
  followModel:FollowModel={id:0,takipEden:"", takipEdilen:""};

  constructor(private videoService: VideoService, private localStorageService: LocalStorageService, private branchService: BranchService, private profileService: ProfileService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private followService: FollowService, private articleService: ArticleService) {


  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.userName = params["userName"];
      this.getProfileDetailsByUserName(this.userName);

    })
  }
  getProfileDetailsByUserName(userName: string) {
    this.profileService.getProfileDetailsByUserName(userName).subscribe(response => {
      if (response.success === true) {
        this.profileDetails = response.data;
        this.getNumberOfFollowersByUserName(userName);
        this.getNumberOfArticlesByUserName(userName);
        this.getNumberOfVideoByUserName(userName);
        if (this.localStorageService.isThereToken()) {
          this.getUserNameByToken(userName)
          this.isFollow(userName);
        }
        this.getBranchByUserName(userName);


      } else {
        this.isThereUser = false;

      }
    }, (error) => {

      this.isThereUser = false;
      this.hataMessage = error.error.message;
      this.openSnackBar(userName, error.error.message);
    })

  }

  openSnackBar(veri: string, metin: string) {

    if (metin == undefined) {
      this.snackBar.open(`Bir şeyler yanlış gitti`, "Tamam", {
        duration: 5 * 1000,
      });
    } else {
      this.snackBar.open(`${veri} ${metin}`, "Tamam", {
        duration: 5 * 1000,
      });
    }
  }

  getNumberOfFollowersByUserName(userName: string) {
    this.followService.getNumberOfFollowersByUserName(userName).subscribe(response => {
      this.numberOfFollowers = response.data

    })
  }
  getNumberOfArticlesByUserName(userName: string) {
    this.articleService.getNumberOfArticlesByUserName(userName).subscribe(response => {
      this.numberOfArticles = response.data

    })
  }
  getBranchByUserName(userName: string) {
    this.branchService.getBranchByUserName(userName).subscribe(response => {
      if (response.data != null) {
        this.branch = response.data
      }
      this.isLoading = true;
    })
  }
  getNumberOfVideoByUserName(userName: string) {
    this.videoService.getNumberOfVideoByUserName(userName).subscribe(response => {
      this.numberOfVideos = response.data
    })
  }
  getUserNameByToken(userName: string) {
    this.profileService.getUserNameByToken().subscribe(response => {
      if (response.data == userName) {
        this.kendisiMi = true;
      } else {
        this.kendisiMi = false;
      }

    })
  }
  follow(userName: string) {

this.followService.follow(userName).subscribe(res=>{
  if (res.success) {
    this.areYouFollow=true;
    this.numberOfFollowers +=1;
    this.openSnackBar(userName," takip edildi.")
  }else{
    this.openSnackBar(userName," takip etme başarısız")
  }
})
  }
  unfollow(userName: string) {


this.followService.unfollow(userName).subscribe(res=>{
  if (res.success) {
     this.areYouFollow=false;
     this.numberOfFollowers -=1;
    this.openSnackBar(userName," takipten çıkarıldı.");
  }else{
    this.openSnackBar(userName," takipten çıkma başarısız.");
  }
})
  }
  isFollow(userName: string) {
    this.followService.onuTakipEdiyorMusun(userName).subscribe(res => {
      if (res.data!=null) {
        this.areYouFollow = true;
        this.followModel=res.data;
      }else{
        this.areYouFollow=false;
      }

    })
  }
}
