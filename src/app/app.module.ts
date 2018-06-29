/*Default Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*HttpReqResModules*/
import { HttpClientModule } from '@angular/common/http';

/*Routes*/
import { APP_ROUTING } from './app.routes';

/*Components import*/
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/user/login/login.component';
import { SignupComponent } from './modules/user/signup/signup.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ProjectComponent } from './modules/projects/project/project.component';
import { MeComponent } from './modules/user/me/me.component';
/*Services import*/
import { ProjectsService } from './services/projects/projects.service';
import {UserService} from './services/user/user.service';
/*Graficos*/
import {ChartsModule} from 'ng2-charts';
import { TagsComponent } from './modules/user/tags/tags.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    MeComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    ChartsModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
