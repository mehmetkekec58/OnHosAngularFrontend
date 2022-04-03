
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AuthInterceptor } from './interceptors/auth.interceptor'
import { MatSliderModule } from '@angular/material/slider';
import { NaviComponent } from './components/navi/navi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorsRecommendedForYouComponent } from './components/doctors-recommended-for-you/doctors-recommended-for-you.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { PopularArticleComponent } from './components/popular-article/popular-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonDiseasesInThisSeasonComponent } from './components/common-diseases-in-this-season/common-diseases-in-this-season.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DrawerMenuListComponent } from './components/drawer-menu-list/drawer-menu-list.component';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { VideoComponent } from './components/profil-icerikler/video/video.component';
import { PostsComponent } from './components/profil-icerikler/posts/posts.component';
import { ArticleProfileComponent } from './components/profil-icerikler/article-profile/article-profile.component';
import { ArticleComponent } from './components/article/article.component';
import { HistoryComponent } from './components/history/history.component';
import { OkumaListesiComponent } from './components/okuma-listesi/okuma-listesi.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUpdateUserComponent } from './components/profile-update-user/profile-update-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PurseComponent } from './components/purse/purse.component';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DashboardComponent,
    ProfileComponent,
    HomePageComponent,
    DoctorListComponent,
    DoctorsRecommendedForYouComponent,
    ArticleListComponent,
    PopularArticleComponent,
    FooterComponent,
    CommonDiseasesInThisSeasonComponent,
    DrawerMenuListComponent,
    VideoComponent,
    PostsComponent,
    ArticleProfileComponent,
    ArticleComponent,
    HistoryComponent,
    OkumaListesiComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    RegisterComponent,
    ProfileUpdateComponent,
    ProfileUpdateUserComponent,
    SettingsComponent,
    PurseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    RouterModule,
    MatChipsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatInputModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
