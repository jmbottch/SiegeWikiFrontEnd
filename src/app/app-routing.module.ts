import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldsComponent } from './worlds/worlds.component';
import { SeasonComponent } from './seasons/season-list/season/season.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { OperatorsComponent } from './operators/operators.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { SeasonDetailComponent } from './seasons/season-detail/season-detail.component';
import { OperatorDetailComponent } from './operators/operator-detail/operator-detail.component';
import { WorldDetailComponent } from './worlds/world-detail/world-detail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  //LIST VIEW ROUTES
  {
    path:'operators',
    component: OperatorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'maps',
    component: WorldsComponent
  },
  {
    path:'operations',
    component: SeasonsComponent
  },
  // AUTHENTICATION ROUTES
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  //SEASON ROUTES
  {
    path:'operations/detail',
    component: SeasonDetailComponent,
  },
  //WORLD ROUTES
  {
    path:'maps/detail',
    component: WorldDetailComponent
  },
  //OPERATOR ROUTES
  {
    path:'operators/detail',
    component: OperatorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
