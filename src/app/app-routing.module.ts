import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorComponent } from './operators/operator-list/operator/operator.component';
import { WorldsComponent } from './worlds/worlds.component';
import { SeasonComponent } from './seasons/season-list/season/season.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'operators',
    component: OperatorComponent
  },
  {
    path:'maps',
    component: WorldsComponent
  },
  {
    path:'seasons',
    component: SeasonComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
