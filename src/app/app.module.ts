/*Default Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*HttpReqResModules*/
import {HttpModule} from '@angular/http';


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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
