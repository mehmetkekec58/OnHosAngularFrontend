import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {MatTabsModule} from '@angular/material/tabs';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorsRecommendedForYouComponent } from './components/doctors-recommended-for-you/doctors-recommended-for-you.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { PopularArticleComponent } from './components/popular-article/popular-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonDiseasesInThisSeasonComponent } from './components/common-diseases-in-this-season/common-diseases-in-this-season.component';
import {MatFormFieldModule,MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { DrawerMenuListComponent } from './components/drawer-menu-list/drawer-menu-list.component';
import { RouterModule } from '@angular/router';
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
     DrawerMenuListComponent

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
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
