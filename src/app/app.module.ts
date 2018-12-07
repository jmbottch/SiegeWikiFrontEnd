import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';
import { SeasonComponent } from './seasons/season-list/season/season.component';
import { SeasonDetailComponent } from './seasons/season-detail/season-detail.component';
import { SeasonEditComponent } from './seasons/season-edit/season-edit.component';
import { SeasonDeleteComponent } from './seasons/season-delete/season-delete.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatorListComponent } from './operators/operator-list/operator-list.component';
import { OperatorComponent } from './operators/operator-list/operator/operator.component';
import { OperatorEditComponent } from './operators/operator-edit/operator-edit.component';
import { OperatorDetailComponent } from './operators/operator-detail/operator-detail.component';
import { OperatorDeleteComponent } from './operators/operator-delete/operator-delete.component';
import { WorldsComponent } from './worlds/worlds.component';
import { WorldListComponent } from './worlds/world-list/world-list.component';
import { WorldComponent } from './worlds/world-list/world/world.component';
import { WorldEditComponent } from './worlds/world-edit/world-edit.component';
import { WorldDetailComponent } from './worlds/world-detail/world-detail.component';
import { WorldDeleteComponent } from './worlds/world-delete/world-delete.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from  '@angular/common/http';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    SeasonsComponent,
    SeasonListComponent,
    SeasonComponent,
    SeasonDetailComponent,
    SeasonEditComponent,
    SeasonDeleteComponent,
    OperatorsComponent,
    OperatorListComponent,
    OperatorComponent,
    OperatorEditComponent,
    OperatorDetailComponent,
    OperatorDeleteComponent,
    WorldsComponent,
    WorldListComponent,
    WorldComponent,
    WorldEditComponent,
    WorldDetailComponent,
    WorldDeleteComponent,
    SeasonDeleteComponent,
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    UserDeleteComponent,    
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ AppComponent, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
