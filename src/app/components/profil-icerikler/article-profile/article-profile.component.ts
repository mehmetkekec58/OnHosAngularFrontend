import { BranchModel } from 'src/app/models/branchModel';
import { ProfileDetailModel } from 'src/app/models/profileDetailModel';
import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/articleModel';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-profile',
  templateUrl: './article-profile.component.html',
  styleUrls: ['./article-profile.component.css']
})
export class ArticleProfileComponent implements OnInit {
  articles: ArticleModel[] = [];
  constructor(private articleService: ArticleService) { }
  @Input() profileDetails: ProfileDetailModel;
  @Input() branch: string;
  ngOnInit(): void {
    this.getArticlesByUserName(this.profileDetails.userName)
  }
  getArticlesByUserName(userName: string) {
    this.articleService.getArticleByUserName(userName).subscribe(response => {
      this.articles = response.data
      console.log(response.data)
    })
  }
}
