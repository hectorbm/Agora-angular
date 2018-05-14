import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/user/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/user/signup/signup.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ProjectComponent } from './modules/projects/project/project.component';


const app_routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent },
  { path:'project/:id', component:ProjectComponent},
  { path:'projects', component: ProjectsComponent },
  { path:'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
