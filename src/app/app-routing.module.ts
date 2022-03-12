import { PayComponent } from './components/pay/pay.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { HistoryComponent } from './components/history/history.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"" ,pathMatch:"full", component:HomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile/update",pathMatch:"full",component:ProfileUpdateComponent},
  {path:"profile/:userName",component:ProfileComponent},
  {path:"article/add",pathMatch:"full", component:ArticleAddComponent},
  {path:"article/:id", component:ArticleComponent},
  {path:"chat", component:ChatComponent},
  {path:"chat/:userName", component:ChatComponent},
  {path:"history", component:HistoryComponent},
  {path:"pay", component:PayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
