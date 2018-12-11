var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { WorldDeleteComponent } from './worlds/world-delete/world-delete.component';
;
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { SiegeService } from './siege.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SeasonCreateComponent } from './seasons/season-create/season-create.component';
import { WorldCreateComponent } from './worlds/world-create/world-create.component';
import { OperatorCreateComponent } from './operators/operator-create/operator-create.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
            providers: [AppComponent, AuthService, AuthGuard, SiegeService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptorService,
                    multi: true
                }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map