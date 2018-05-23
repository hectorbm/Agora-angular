/*Default Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*HttpReqResModules*/
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
/*Routes*/
import { APP_ROUTING } from "./app.routes";

/*Components import*/
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/user/login/login.component';
import { SignupComponent } from './modules/user/signup/signup.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ProjectComponent } from './modules/projects/project/project.component';
/*Services import*/
import { ProjectsService } from './services/projects/projects.service';
import { SignupService } from './services/user/signUp/signup.service';
import { LoginService } from './services/user/login/login.service';

/*Graficos*/
import {ChartsModule} from 'ng2-charts';
import { MeComponent } from './modules/user/me/me.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    APP_ROUTING,
    ChartsModule
  ],
  providers: [
    ProjectsService,
    SignupService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
