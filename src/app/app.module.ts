import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonDetailComponent } from './seasons/season-detail/season-detail.component';
import { SeasonEditComponent } from './seasons/season-edit/season-edit.component';
import { SeasonDeleteComponent } from './seasons/season-delete/season-delete.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatorEditComponent } from './operators/operator-edit/operator-edit.component';
import { OperatorDetailComponent } from './operators/operator-detail/operator-detail.component';
import { OperatorDeleteComponent } from './operators/operator-delete/operator-delete.component';
import { WorldsComponent } from './worlds/worlds.component';
import { WorldEditComponent } from './worlds/world-edit/world-edit.component';
import { WorldDetailComponent } from './worlds/world-detail/world-detail.component';
import { WorldDeleteComponent } from './worlds/world-delete/world-delete.component';;
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';
import { AuthService } from './auth.service';
import { SiegeService } from './siege.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SeasonCreateComponent } from './seasons/season-create/season-create.component';
import { WorldCreateComponent } from './worlds/world-create/world-create.component';
import { OperatorCreateComponent } from './operators/operator-create/operator-create.component';
import { SeasonPopulateComponent } from './seasons/season-populate/season-populate.component';




@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    AppComponent,
    SeasonsComponent,
    SeasonDetailComponent,
    SeasonEditComponent,
    SeasonDeleteComponent,
    OperatorsComponent,
    OperatorEditComponent,
    OperatorDetailComponent,
    OperatorDeleteComponent,
    WorldsComponent,
    WorldEditComponent,
    WorldDetailComponent,
    WorldDeleteComponent,
    SeasonDeleteComponent,
    UserDeleteComponent,    
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SeasonCreateComponent,
    WorldCreateComponent,
    OperatorCreateComponent,
    SeasonPopulateComponent,
    
   
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    HttpClientModule,
    

  ],
  providers: [ AppComponent, AuthService, AuthGuard, SiegeService, OperatorsComponent,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
