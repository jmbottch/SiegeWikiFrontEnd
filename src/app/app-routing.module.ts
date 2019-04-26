import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldsComponent } from './worlds/worlds.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { OperatorsComponent } from './operators/operators.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { OperatorDetailComponent } from './operators/operator-detail/operator-detail.component';
import { WorldDetailComponent } from './worlds/world-detail/world-detail.component';
import { SeasonCreateComponent } from './seasons/season-create/season-create.component';
import { WorldCreateComponent } from './worlds/world-create/world-create.component';
import { OperatorCreateComponent } from './operators/operator-create/operator-create.component';
import { OperatorDeleteComponent } from './operators/operator-delete/operator-delete.component';
import { SeasonDeleteComponent } from './seasons/season-delete/season-delete.component';
import { WorldDeleteComponent } from './worlds/world-delete/world-delete.component';
import { SeasonEditComponent } from './seasons/season-edit/season-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { OperatorEditComponent } from './operators/operator-edit/operator-edit.component';
import { WorldEditComponent } from './worlds/world-edit/world-edit.component';
import { SeasonPopulateComponent } from './seasons/season-populate/season-populate.component';
import { SeasonWidthIdComponent } from './seasons/season-with-id/season-width-id/season-width-id.component';
import { WorldWithIdComponent } from './worlds/world-with-id/world-with-id.component';
import { OperatorWithIdComponent } from './operators/operator-with-id/operator-with-id.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  //LIST VIEW ROUTES
  {
    path:'operators',
    component: OperatorsComponent
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
  {
    path:'deleteUser',
    component: UserDeleteComponent
  },
  //SEASON ROUTES
  {
    path:'season/create',
    component: SeasonCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'season/edit/:id',
    component: SeasonEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'season/delete/:id',
    component:SeasonDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'operations/populate',
    component: SeasonPopulateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'season/:id',
    component: SeasonWidthIdComponent
  },
  //WORLD ROUTES
  {
    path:'maps/create',
    component: WorldCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'map/edit/:id',
    component: WorldEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'map/delete/:id',
    component: WorldDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'map/:id',
    component: WorldWithIdComponent
  },
  //OPERATOR ROUTES
  {
    path:'operator/create',
    component: OperatorCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: 'operator/delete/:id',
    component: OperatorDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'operator/edit/:id',
    component: OperatorEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'operator/:id',
    component: OperatorWithIdComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
