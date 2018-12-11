var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorldsComponent } from './worlds/worlds.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { OperatorsComponent } from './operators/operators.component';
import { HomeComponent } from './home/home.component';
import { SeasonCreateComponent } from './seasons/season-create/season-create.component';
import { WorldCreateComponent } from './worlds/world-create/world-create.component';
import { OperatorCreateComponent } from './operators/operator-create/operator-create.component';
import { OperatorDeleteComponent } from './operators/operator-delete/operator-delete.component';
import { SeasonDeleteComponent } from './seasons/season-delete/season-delete.component';
import { WorldDeleteComponent } from './worlds/world-delete/world-delete.component';
import { SeasonEditComponent } from './seasons/season-edit/season-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
var routes = [
    {
        path: '',
        component: HomeComponent
    },
    //LIST VIEW ROUTES
    {
        path: 'operators',
        component: OperatorsComponent
    },
    {
        path: 'maps',
        component: WorldsComponent
    },
    {
        path: 'operations',
        component: SeasonsComponent
    },
    // AUTHENTICATION ROUTES
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'deleteUser',
        component: UserDeleteComponent
    },
    //SEASON ROUTES
    {
        path: 'operations/create',
        component: SeasonCreateComponent,
    },
    {
        path: 'operations/delete',
        component: SeasonDeleteComponent
    },
    {
        path: 'operations/edit',
        component: SeasonEditComponent
    },
    //WORLD ROUTES
    {
        path: 'maps/create',
        component: WorldCreateComponent
    },
    {
        path: 'maps/delete',
        component: WorldDeleteComponent
    },
    //OPERATOR ROUTES
    {
        path: 'operators/create',
        component: OperatorCreateComponent
    },
    { path: 'operators/delete',
        component: OperatorDeleteComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map