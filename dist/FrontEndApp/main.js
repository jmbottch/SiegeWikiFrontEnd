(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worlds/worlds.component */ "./src/app/worlds/worlds.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seasons/seasons.component */ "./src/app/seasons/seasons.component.ts");
/* harmony import */ var _operators_operators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operators/operators.component */ "./src/app/operators/operators.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _seasons_season_create_season_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seasons/season-create/season-create.component */ "./src/app/seasons/season-create/season-create.component.ts");
/* harmony import */ var _worlds_world_create_world_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./worlds/world-create/world-create.component */ "./src/app/worlds/world-create/world-create.component.ts");
/* harmony import */ var _operators_operator_create_operator_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operators/operator-create/operator-create.component */ "./src/app/operators/operator-create/operator-create.component.ts");
/* harmony import */ var _operators_operator_delete_operator_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operators/operator-delete/operator-delete.component */ "./src/app/operators/operator-delete/operator-delete.component.ts");
/* harmony import */ var _seasons_season_delete_season_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seasons/season-delete/season-delete.component */ "./src/app/seasons/season-delete/season-delete.component.ts");
/* harmony import */ var _worlds_world_delete_world_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./worlds/world-delete/world-delete.component */ "./src/app/worlds/world-delete/world-delete.component.ts");
/* harmony import */ var _seasons_season_edit_season_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./seasons/season-edit/season-edit.component */ "./src/app/seasons/season-edit/season-edit.component.ts");
/* harmony import */ var _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-delete/user-delete.component */ "./src/app/user-delete/user-delete.component.ts");
/* harmony import */ var _operators_operator_edit_operator_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./operators/operator-edit/operator-edit.component */ "./src/app/operators/operator-edit/operator-edit.component.ts");
/* harmony import */ var _worlds_world_edit_world_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./worlds/world-edit/world-edit.component */ "./src/app/worlds/world-edit/world-edit.component.ts");
/* harmony import */ var _seasons_season_populate_season_populate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./seasons/season-populate/season-populate.component */ "./src/app/seasons/season-populate/season-populate.component.ts");
/* harmony import */ var _seasons_season_with_id_season_width_id_season_width_id_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./seasons/season-with-id/season-width-id/season-width-id.component */ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.ts");
/* harmony import */ var _worlds_world_with_id_world_with_id_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./worlds/world-with-id/world-with-id.component */ "./src/app/worlds/world-with-id/world-with-id.component.ts");
/* harmony import */ var _operators_operator_with_id_operator_with_id_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./operators/operator-with-id/operator-with-id.component */ "./src/app/operators/operator-with-id/operator-with-id.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    //LIST VIEW ROUTES
    {
        path: 'operators',
        component: _operators_operators_component__WEBPACK_IMPORTED_MODULE_6__["OperatorsComponent"]
    },
    {
        path: 'maps',
        component: _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_2__["WorldsComponent"]
    },
    {
        path: 'operations',
        component: _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_5__["SeasonsComponent"]
    },
    // AUTHENTICATION ROUTES
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'deleteUser',
        component: _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_15__["UserDeleteComponent"]
    },
    //SEASON ROUTES
    {
        path: 'operations/create',
        component: _seasons_season_create_season_create_component__WEBPACK_IMPORTED_MODULE_8__["SeasonCreateComponent"],
    },
    {
        path: 'operations/delete',
        component: _seasons_season_delete_season_delete_component__WEBPACK_IMPORTED_MODULE_12__["SeasonDeleteComponent"]
    },
    {
        path: 'operations/edit',
        component: _seasons_season_edit_season_edit_component__WEBPACK_IMPORTED_MODULE_14__["SeasonEditComponent"]
    },
    {
        path: 'operations/populate',
        component: _seasons_season_populate_season_populate_component__WEBPACK_IMPORTED_MODULE_18__["SeasonPopulateComponent"]
    },
    {
        path: 'season/:id',
        component: _seasons_season_with_id_season_width_id_season_width_id_component__WEBPACK_IMPORTED_MODULE_19__["SeasonWidthIdComponent"]
    },
    //WORLD ROUTES
    {
        path: 'maps/create',
        component: _worlds_world_create_world_create_component__WEBPACK_IMPORTED_MODULE_9__["WorldCreateComponent"]
    },
    {
        path: 'maps/delete',
        component: _worlds_world_delete_world_delete_component__WEBPACK_IMPORTED_MODULE_13__["WorldDeleteComponent"]
    },
    {
        path: 'map/edit/:id',
        component: _worlds_world_edit_world_edit_component__WEBPACK_IMPORTED_MODULE_17__["WorldEditComponent"]
    },
    {
        path: 'map/delete/:id',
        component: _worlds_world_delete_world_delete_component__WEBPACK_IMPORTED_MODULE_13__["WorldDeleteComponent"]
    },
    {
        path: 'map/:id',
        component: _worlds_world_with_id_world_with_id_component__WEBPACK_IMPORTED_MODULE_20__["WorldWithIdComponent"]
    },
    //OPERATOR ROUTES
    {
        path: 'operators/create',
        component: _operators_operator_create_operator_create_component__WEBPACK_IMPORTED_MODULE_10__["OperatorCreateComponent"]
    },
    { path: 'operators/delete',
        component: _operators_operator_delete_operator_delete_component__WEBPACK_IMPORTED_MODULE_11__["OperatorDeleteComponent"]
    },
    {
        path: 'operators/edit/:id',
        component: _operators_operator_edit_operator_edit_component__WEBPACK_IMPORTED_MODULE_16__["OperatorEditComponent"]
    },
    {
        path: 'operator/:id',
        component: _operators_operator_with_id_operator_with_id_component__WEBPACK_IMPORTED_MODULE_21__["OperatorWithIdComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">R6SW</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/operators\" routerlinkActive=\"active\">Operators</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/maps\" routerlinkActive=\"active\">Maps</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/operations\" routerlinkActive=\"active\">Operations</a>\r\n    </li>\r\n</ul>\r\n<ul class=\"navbar-nav navbar-right\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"_authService.logoutUser()\">Logout</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n      <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" routerLink=\"/deleteUser\" routerLinkActive=\"active\" >Delete User</a>\r\n  </li>\r\n</ul>\r\n  </div>\r\n</nav>    \r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>            \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_authService) {
        this._authService = _authService;
        this.title = 'Rainbow Six Siege Wiki';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seasons/seasons.component */ "./src/app/seasons/seasons.component.ts");
/* harmony import */ var _seasons_season_detail_season_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seasons/season-detail/season-detail.component */ "./src/app/seasons/season-detail/season-detail.component.ts");
/* harmony import */ var _seasons_season_edit_season_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seasons/season-edit/season-edit.component */ "./src/app/seasons/season-edit/season-edit.component.ts");
/* harmony import */ var _seasons_season_delete_season_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seasons/season-delete/season-delete.component */ "./src/app/seasons/season-delete/season-delete.component.ts");
/* harmony import */ var _operators_operators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./operators/operators.component */ "./src/app/operators/operators.component.ts");
/* harmony import */ var _operators_operator_edit_operator_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operators/operator-edit/operator-edit.component */ "./src/app/operators/operator-edit/operator-edit.component.ts");
/* harmony import */ var _operators_operator_detail_operator_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operators/operator-detail/operator-detail.component */ "./src/app/operators/operator-detail/operator-detail.component.ts");
/* harmony import */ var _operators_operator_delete_operator_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operators/operator-delete/operator-delete.component */ "./src/app/operators/operator-delete/operator-delete.component.ts");
/* harmony import */ var _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./worlds/worlds.component */ "./src/app/worlds/worlds.component.ts");
/* harmony import */ var _worlds_world_edit_world_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./worlds/world-edit/world-edit.component */ "./src/app/worlds/world-edit/world-edit.component.ts");
/* harmony import */ var _worlds_world_detail_world_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./worlds/world-detail/world-detail.component */ "./src/app/worlds/world-detail/world-detail.component.ts");
/* harmony import */ var _worlds_world_delete_world_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./worlds/world-delete/world-delete.component */ "./src/app/worlds/world-delete/world-delete.component.ts");
/* harmony import */ var _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-delete/user-delete.component */ "./src/app/user-delete/user-delete.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _seasons_season_create_season_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./seasons/season-create/season-create.component */ "./src/app/seasons/season-create/season-create.component.ts");
/* harmony import */ var _worlds_world_create_world_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./worlds/world-create/world-create.component */ "./src/app/worlds/world-create/world-create.component.ts");
/* harmony import */ var _operators_operator_create_operator_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./operators/operator-create/operator-create.component */ "./src/app/operators/operator-create/operator-create.component.ts");
/* harmony import */ var _seasons_season_populate_season_populate_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./seasons/season-populate/season-populate.component */ "./src/app/seasons/season-populate/season-populate.component.ts");
/* harmony import */ var _seasons_season_with_id_season_width_id_season_width_id_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./seasons/season-with-id/season-width-id/season-width-id.component */ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.ts");
/* harmony import */ var _worlds_world_with_id_world_with_id_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./worlds/world-with-id/world-with-id.component */ "./src/app/worlds/world-with-id/world-with-id.component.ts");
/* harmony import */ var _operators_operator_with_id_operator_with_id_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./operators/operator-with-id/operator-with-id.component */ "./src/app/operators/operator-with-id/operator-with-id.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















;





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_4__["SeasonsComponent"],
                _seasons_season_detail_season_detail_component__WEBPACK_IMPORTED_MODULE_5__["SeasonDetailComponent"],
                _seasons_season_edit_season_edit_component__WEBPACK_IMPORTED_MODULE_6__["SeasonEditComponent"],
                _seasons_season_delete_season_delete_component__WEBPACK_IMPORTED_MODULE_7__["SeasonDeleteComponent"],
                _operators_operators_component__WEBPACK_IMPORTED_MODULE_8__["OperatorsComponent"],
                _operators_operator_edit_operator_edit_component__WEBPACK_IMPORTED_MODULE_9__["OperatorEditComponent"],
                _operators_operator_detail_operator_detail_component__WEBPACK_IMPORTED_MODULE_10__["OperatorDetailComponent"],
                _operators_operator_delete_operator_delete_component__WEBPACK_IMPORTED_MODULE_11__["OperatorDeleteComponent"],
                _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_12__["WorldsComponent"],
                _worlds_world_edit_world_edit_component__WEBPACK_IMPORTED_MODULE_13__["WorldEditComponent"],
                _worlds_world_detail_world_detail_component__WEBPACK_IMPORTED_MODULE_14__["WorldDetailComponent"],
                _worlds_world_delete_world_delete_component__WEBPACK_IMPORTED_MODULE_15__["WorldDeleteComponent"],
                _seasons_season_delete_season_delete_component__WEBPACK_IMPORTED_MODULE_7__["SeasonDeleteComponent"],
                _user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_16__["UserDeleteComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _seasons_season_create_season_create_component__WEBPACK_IMPORTED_MODULE_28__["SeasonCreateComponent"],
                _worlds_world_create_world_create_component__WEBPACK_IMPORTED_MODULE_29__["WorldCreateComponent"],
                _operators_operator_create_operator_create_component__WEBPACK_IMPORTED_MODULE_30__["OperatorCreateComponent"],
                _seasons_season_populate_season_populate_component__WEBPACK_IMPORTED_MODULE_31__["SeasonPopulateComponent"],
                _seasons_season_with_id_season_width_id_season_width_id_component__WEBPACK_IMPORTED_MODULE_32__["SeasonWidthIdComponent"],
                _worlds_world_with_id_world_with_id_component__WEBPACK_IMPORTED_MODULE_33__["WorldWithIdComponent"],
                _operators_operator_with_id_operator_with_id_component__WEBPACK_IMPORTED_MODULE_34__["OperatorWithIdComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"]
            ],
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _siege_service__WEBPACK_IMPORTED_MODULE_25__["SiegeService"], _operators_operators_component__WEBPACK_IMPORTED_MODULE_8__["OperatorsComponent"], _seasons_seasons_component__WEBPACK_IMPORTED_MODULE_4__["SeasonsComponent"], _worlds_worlds_component__WEBPACK_IMPORTED_MODULE_12__["WorldsComponent"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_27__["TokenInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"],
                    multi: true,
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return _worlds_world_edit_world_edit_component__WEBPACK_IMPORTED_MODULE_13__["WorldEditComponent"]; })
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "/api/user/register";
        this._loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "/api/user/login";
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/operations']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card mt-5'>\r\n    <div class='card-header text-center'>\r\n        <h1>Operations:</h1>\r\n    </div>\r\n</div>\r\n\r\n    <app-seasons></app-seasons>\r\n\r\n\r\n<div class='card mt-5'>\r\n    <div class='card-header text-center'>\r\n        <h1>Operators:</h1>\r\n    </div>\r\n</div>\r\n\r\n<app-operators></app-operators>\r\n\r\n<div class='card mt-5'>\r\n    <div class='card-header text-center'>\r\n        <h1>Maps:</h1>\r\n    </div>\r\n</div>\r\n<app-worlds></app-worlds>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <span class=\"anchor\" id=\"formLogin\"></span>\r\n\r\n      <!-- form card login -->\r\n      <div class=\"card rounded-0\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"mb-0\">Login</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form class=\"form\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name1\">name</label>\r\n              <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.name\" name=\"name\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Password</label>\r\n              <input type=\"password\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.password\" name=\"password\" required>\r\n            </div>\r\n            <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-success float-right\">Login</button>\r\n          </form>\r\n        </div>\r\n        <!--/card-block-->\r\n      </div>\r\n      <!-- /form card login -->\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {
            name: String,
            password: String
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/operations']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 500) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/operators/operator-create/operator-create.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/operators/operator-create/operator-create.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvci1jcmVhdGUvb3BlcmF0b3ItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/operators/operator-create/operator-create.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/operators/operator-create/operator-create.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n    <div class=\"card-heading text-center\">\r\n      Create New Operator\r\n      <hr/>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form class=\"form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name3\">Operator name:</label>\r\n            <input type=\"text\" [(ngModel)]=\"operatorCreateForm.name\" name=\"operatorName\" class=\"form-control rounded-0\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Description: </label>\r\n            <input type=\"text\" [(ngModel)]=\"operatorCreateForm.description\" name=\"operatorDescription\" class=\"form-control rounded-0\"  required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Side: </label>\r\n              <select id=\"OperatorSelector\" [(ngModel)]=\"operatorCreateForm.side\" name=\"side\" style=\"width: 100%;\" class=\"dropdownoperator\" >\r\n                  <option >Attacker</option>\r\n                  <option >Defender</option>\r\n                  </select>\r\n          </div>\r\n            \r\n          <button type=\"button\" (click)=\"addOperator()\" class=\"btn btn-primary float-right\">Confirm</button>\r\n        </form>\r\n      </div>\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/operators/operator-create/operator-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/operators/operator-create/operator-create.component.ts ***!
  \************************************************************************/
/*! exports provided: OperatorCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorCreateComponent", function() { return OperatorCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OperatorCreateComponent = /** @class */ (function () {
    function OperatorCreateComponent(_siegeService, _router) {
        this._siegeService = _siegeService;
        this._router = _router;
        this.operatorCreateForm = {
            name: String,
            description: String,
            side: String
        };
    }
    OperatorCreateComponent.prototype.ngOnInit = function () {
    };
    OperatorCreateComponent.prototype.addOperator = function () {
        var _this = this;
        this._siegeService.addOperator(this.operatorCreateForm)
            .subscribe(function (res) {
            _this._router.navigate(['/operators']);
            console.log(res);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    OperatorCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator-create',
            template: __webpack_require__(/*! ./operator-create.component.html */ "./src/app/operators/operator-create/operator-create.component.html"),
            styles: [__webpack_require__(/*! ./operator-create.component.css */ "./src/app/operators/operator-create/operator-create.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OperatorCreateComponent);
    return OperatorCreateComponent;
}());



/***/ }),

/***/ "./src/app/operators/operator-delete/operator-delete.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/operators/operator-delete/operator-delete.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvci1kZWxldGUvb3BlcmF0b3ItZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/operators/operator-delete/operator-delete.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/operators/operator-delete/operator-delete.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n  \r\n  <div class=\"card-body text-center\">\r\n     <h3>Weet je zeker dat je deze operator wilt verwijderen?</h3>\r\n     <br/>\r\n     <button type=\"button\"\t(click)=\"deleteOperator()\" class=\"btn btn-danger createbutton\">Verwijder Operator</button>\r\n    </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/operators/operator-delete/operator-delete.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/operators/operator-delete/operator-delete.component.ts ***!
  \************************************************************************/
/*! exports provided: OperatorDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorDeleteComponent", function() { return OperatorDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperatorDeleteComponent = /** @class */ (function () {
    function OperatorDeleteComponent() {
    }
    OperatorDeleteComponent.prototype.ngOnInit = function () {
    };
    OperatorDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator-delete',
            template: __webpack_require__(/*! ./operator-delete.component.html */ "./src/app/operators/operator-delete/operator-delete.component.html"),
            styles: [__webpack_require__(/*! ./operator-delete.component.css */ "./src/app/operators/operator-delete/operator-delete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperatorDeleteComponent);
    return OperatorDeleteComponent;
}());



/***/ }),

/***/ "./src/app/operators/operator-detail/operator-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/operators/operator-detail/operator-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvci1kZXRhaWwvb3BlcmF0b3ItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/operators/operator-detail/operator-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/operators/operator-detail/operator-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-operator-edit [operator]=\"selectedOperator\"></app-operator-edit>\r\n<div *ngIf=\"operator\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h5 class=\"card-title\">\r\n        Detailed Information about {{operator.name | uppercase}}\r\n      </h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">\r\n\r\n        <b>Name:</b>\r\n        <br />\r\n        {{operator.name}}\r\n        <br />\r\n        <b>Description:</b>\r\n        <br />\r\n        {{operator.description}}\r\n        <br />\r\n        <b>Side:</b>\r\n        <br />\r\n        {{operator.side}}\r\n        <br />\r\n        <b>season: </b>\r\n        <br />\r\n        {{operator.season}}\r\n        <br />\r\n      </p>\r\n    </div>\r\n    <div class=\"card-footer text-center\">\r\n        <button *ngIf=\"_authService.loggedIn()\" (click)=\"onSelect(operator)\" type=\"button\"\r\n        class=\"btn btn-warning btn-season float-left\">Edit</button>\r\n      <button [routerLink]=\"['/operator', operator._id]\" routerLinkActive=\"active\" type=\"button\"\r\n        class=\"btn btn-primary btn-season\">View</button>\r\n      <button *ngIf=\"_authService.loggedIn()\" (click)=\"deleteOperator()\" type=\"button\"\r\n        class=\"btn btn-danger btn-season float-right\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/operators/operator-detail/operator-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/operators/operator-detail/operator-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: OperatorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorDetailComponent", function() { return OperatorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _operator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operator.model */ "./src/app/operators/operator.model.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _operators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators.component */ "./src/app/operators/operators.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperatorDetailComponent = /** @class */ (function () {
    function OperatorDetailComponent(_siegeService, _authService, _operatorComp) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this._operatorComp = _operatorComp;
    }
    OperatorDetailComponent.prototype.ngOnInit = function () {
    };
    OperatorDetailComponent.prototype.onSelect = function (operator) {
        this.selectedOperator = operator;
    };
    OperatorDetailComponent.prototype.deleteOperator = function () {
        var _this = this;
        this._siegeService.deleteOperator(this.operator.name)
            .subscribe(function (res) {
            _this._operatorComp.refreshOperators();
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _operator_model__WEBPACK_IMPORTED_MODULE_2__["Character"])
    ], OperatorDetailComponent.prototype, "operator", void 0);
    OperatorDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator-detail',
            template: __webpack_require__(/*! ./operator-detail.component.html */ "./src/app/operators/operator-detail/operator-detail.component.html"),
            styles: [__webpack_require__(/*! ./operator-detail.component.css */ "./src/app/operators/operator-detail/operator-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _operators_component__WEBPACK_IMPORTED_MODULE_4__["OperatorsComponent"]])
    ], OperatorDetailComponent);
    return OperatorDetailComponent;
}());



/***/ }),

/***/ "./src/app/operators/operator-edit/operator-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/operators/operator-edit/operator-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvci1lZGl0L29wZXJhdG9yLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/operators/operator-edit/operator-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/operators/operator-edit/operator-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"operator\">\r\n  <div class=\"card mt-5 mb-5\">\r\n    <div class=\"card-heading text-center\">\r\n      Edit {{operator.name}}\r\n      <hr />\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form class=\"form\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Operator name:</label>\r\n          <input type=\"text\" [(ngModel)]=\"newOperatorName\" name=\"newName\" class=\"form-control rounded-0\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Description: </label>\r\n          <input type=\"text\" [(ngModel)]=\"newOperatorDesc\" name=\"description\" class=\"form-control rounded-0\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Side: </label>\r\n          <select id=\"OperatorSelector\" [(ngModel)]=\"newOperatorSide\" name=\"side\" style=\"width: 100%;\" class=\"dropdownoperator\">\r\n            <option>Attacker</option>\r\n            <option>Defender</option>\r\n          </select>\r\n        </div>\r\n        <button type=\"button\" (click)=\"editOperator()\" class=\"btn btn-primary float-right\">Confirm</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/operators/operator-edit/operator-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/operators/operator-edit/operator-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: OperatorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorEditComponent", function() { return OperatorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _operator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operator.model */ "./src/app/operators/operator.model.ts");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _operators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators.component */ "./src/app/operators/operators.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperatorEditComponent = /** @class */ (function () {
    // operator = {
    //   name: String,
    //   description: String,
    //   side: String,
    //   operator: Character
    // }
    function OperatorEditComponent(_siegeService, _authService, _operatorComp) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this._operatorComp = _operatorComp;
        this.seasons = [];
        this.newOperatorName = '';
        this.newOperatorDesc = '';
        this.newOperatorSide = '';
    }
    OperatorEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this._siegeService.getSeasons()
            .subscribe(function (res) { return _this.seasons = res; }, function (err) { return console.log(err); });
    };
    OperatorEditComponent.prototype.editOperator = function () {
        var _this = this;
        if (this._authService.loggedIn) {
            this.operatorEdit = new _operator_model__WEBPACK_IMPORTED_MODULE_1__["Character"](this.operator.name, this.newOperatorName, this.newOperatorDesc, this.newOperatorSide);
            this._siegeService.editOperator(this.operatorEdit)
                .subscribe(function (res) {
                _this._operatorComp.refreshOperators();
                console.log(res);
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _operator_model__WEBPACK_IMPORTED_MODULE_1__["Character"])
    ], OperatorEditComponent.prototype, "operator", void 0);
    OperatorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator-edit',
            template: __webpack_require__(/*! ./operator-edit.component.html */ "./src/app/operators/operator-edit/operator-edit.component.html"),
            styles: [__webpack_require__(/*! ./operator-edit.component.css */ "./src/app/operators/operator-edit/operator-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _operators_component__WEBPACK_IMPORTED_MODULE_4__["OperatorsComponent"]])
    ], OperatorEditComponent);
    return OperatorEditComponent;
}());



/***/ }),

/***/ "./src/app/operators/operator-with-id/operator-with-id.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/operators/operator-with-id/operator-with-id.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvci13aXRoLWlkL29wZXJhdG9yLXdpdGgtaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/operators/operator-with-id/operator-with-id.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/operators/operator-with-id/operator-with-id.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.operatorById\">\r\n    <div class=\"card mt-2\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-title\">\r\n            Detailed information about {{this.operatorById.name | uppercase}}\r\n          </h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <p class=\"card-text\">\r\n    \r\n                <b>Name:</b>\r\n                <br />\r\n                {{this.operatorById.name}}\r\n                <br />\r\n                <b>Description:</b>\r\n                <br />\r\n                {{this.operatorById.description}}\r\n                <br />\r\n                <b>Season: </b>\r\n                <br />\r\n                {{this.operatorById.season}}\r\n                <br />\r\n                <b>Available in ranked: </b>\r\n                <br />\r\n                {{this.operatorById.availableInRanked}}\r\n                <br />\r\n            </p>\r\n        </div>\r\n        <div class=\"card-footer text-center\">\r\n          <small>This component was made for Richardson Maturity level 2</small>\r\n        </div>\r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/operators/operator-with-id/operator-with-id.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/operators/operator-with-id/operator-with-id.component.ts ***!
  \**************************************************************************/
/*! exports provided: OperatorWithIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorWithIdComponent", function() { return OperatorWithIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/siege.service */ "./src/app/siege.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperatorWithIdComponent = /** @class */ (function () {
    function OperatorWithIdComponent(route, _siegeService) {
        this.route = route;
        this._siegeService = _siegeService;
    }
    OperatorWithIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params['id']);
            return _this._siegeService.getOperatorById(params.id)
                .subscribe(function (res) {
                _this.operatorById = res;
                console.log('res: ' + res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OperatorWithIdComponent.prototype, "operator", void 0);
    OperatorWithIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator-with-id',
            template: __webpack_require__(/*! ./operator-with-id.component.html */ "./src/app/operators/operator-with-id/operator-with-id.component.html"),
            styles: [__webpack_require__(/*! ./operator-with-id.component.css */ "./src/app/operators/operator-with-id/operator-with-id.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"]])
    ], OperatorWithIdComponent);
    return OperatorWithIdComponent;
}());



/***/ }),

/***/ "./src/app/operators/operator.model.ts":
/*!*********************************************!*\
  !*** ./src/app/operators/operator.model.ts ***!
  \*********************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
var Character = /** @class */ (function () {
    function Character(_id, name, newName, description, side) {
        this._id = _id;
        this.name = name;
        this.newName = newName;
        this.description = description;
        this.side = side;
    }
    return Character;
}());



/***/ }),

/***/ "./src/app/operators/operators.component.css":
/*!***************************************************!*\
  !*** ./src/app/operators/operators.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/operators/operators.component.html":
/*!****************************************************!*\
  !*** ./src/app/operators/operators.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\"  *ngIf=\"_authService.loggedIn()\">\r\n  <div class=\"card-body\">\r\n      <a class=\"btn btn-success createbutton\"  routerLink = \"/operators/create\">Niewe Operator aanmaken</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let operator of operators\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">\r\n          {{operator.name}}\r\n        </h5>\r\n        <p class=\"card-text\">\r\n          {{operator.side}}\r\n        </p>\r\n        <a (click)=\"onSelect(operator)\" class=\"btn btn-primary\">Meer Informatie</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-operator-detail [operator]=\"selectedOperator\"></app-operator-detail>"

/***/ }),

/***/ "./src/app/operators/operators.component.ts":
/*!**************************************************!*\
  !*** ./src/app/operators/operators.component.ts ***!
  \**************************************************/
/*! exports provided: OperatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsComponent", function() { return OperatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperatorsComponent = /** @class */ (function () {
    function OperatorsComponent(_siegeService, _authService) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this.operators = [];
    }
    OperatorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this._siegeService.getOperators()
            .subscribe(function (res) { return _this.operators = res; }, function (err) { return console.log(err); });
    };
    OperatorsComponent.prototype.onSelect = function (operator) {
        this.selectedOperator = operator;
    };
    OperatorsComponent.prototype.refreshOperators = function () {
        var _this = this;
        return this._siegeService.getOperators()
            .subscribe(function (res) { return _this.operators = res; }, function (err) { return console.log(err); });
    };
    OperatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operators',
            template: __webpack_require__(/*! ./operators.component.html */ "./src/app/operators/operators.component.html"),
            styles: [__webpack_require__(/*! ./operators.component.css */ "./src/app/operators/operators.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], OperatorsComponent);
    return OperatorsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <span class=\"anchor\" id=\"formLogin\"></span>\r\n\r\n      <!-- form card login -->\r\n      <div class=\"card rounded-0\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"mb-0\">Register</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form class=\"form\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name1\">Name</label>\r\n              <input type=\"text\" [(ngModel)]=\"registerUserData.name\" name=\"name\" class=\"form-control rounded-0\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Password</label>\r\n              <input type=\"password\" [(ngModel)]=\"registerUserData.password\" name=\"password\" class=\"form-control rounded-0\"  required>\r\n            </div>\r\n            <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-primary float-right\">Register</button>\r\n          </form>\r\n        </div>\r\n        <!--/card-block-->\r\n      </div>\r\n      <!-- /form card login -->\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {
            name: String,
            password: String
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this._auth.registerUser(this.registerUserData)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/operations']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season-create/season-create.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/seasons/season-create/season-create.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29uLWNyZWF0ZS9zZWFzb24tY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/seasons/season-create/season-create.component.html":
/*!********************************************************************!*\
  !*** ./src/app/seasons/season-create/season-create.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n  <div class=\"card-heading text-center\">\r\n    Create New Operation\r\n    <hr />\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form class=\"form\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name2\">Operation name:</label>\r\n        <input type=\"text\" [(ngModel)]=\"seasonCreate.name\" name=\"name\" class=\"form-control rounded-0\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description: </label>\r\n        <input type=\"text\" [(ngModel)]=\"seasonCreate.description\" name=\"description\" class=\"form-control rounded-0\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Year: </label>\r\n        <input type=\"number\" [(ngModel)]=\"seasonCreate.year\" name=\"year\" class=\"form-control rounded-0\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Season: </label>\r\n        <input type=\"number\" [(ngModel)]=\"seasonCreate.season\" name=\"season\" class=\"form-control rounded-0\" required>\r\n      </div>\r\n      <button type=\"button\" (click)=\"addSeason()\" class=\"btn btn-primary float-right\">Confirm</button>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div>\r\n    <div class=\"card mt-5\" *ngIf=\"this.showResultBox\">\r\n      <div *ngFor=\"let displayresult of displayresults\">\r\n          <div class=\"card-body\">\r\n              <h4>{{this.displayresult.result}}</h4>\r\n              <p>{{this.displayresult.message}}</p>\r\n            </div>\r\n      </div> \r\n      \r\n      </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"card-body\">\r\n      <form [formGroup] = \"seasonCreate\" (ngSubmit)=\"addSeason()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">\r\n            Operation Name:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" name=\"name\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">\r\n            Description:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" name=\"description\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">\r\n            Year:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" name=\"year\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-4\">\r\n            Season:\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" name=\"season\" />\r\n        </div>\r\n  \r\n        <button type=\"submit\">Submit</button>\r\n      </form>\r\n    </div> -->"

/***/ }),

/***/ "./src/app/seasons/season-create/season-create.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/seasons/season-create/season-create.component.ts ***!
  \******************************************************************/
/*! exports provided: SeasonCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonCreateComponent", function() { return SeasonCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeasonCreateComponent = /** @class */ (function () {
    function SeasonCreateComponent(_siegeService, _router) {
        this._siegeService = _siegeService;
        this._router = _router;
        this.title = 'Create Season';
        this.seasonCreate = {
            name: String,
            description: String,
            year: Number,
            season: Number
        };
        this.displayresult = {};
        this.displayresults = [];
    }
    SeasonCreateComponent.prototype.ngOnInit = function () {
        this.showResultBox = false;
    };
    SeasonCreateComponent.prototype.addSeason = function () {
        var _this = this;
        this._siegeService.addSeason(this.seasonCreate)
            .subscribe(function (res) {
            _this._router.navigate(['/operations']);
            console.log(res);
            _this.displayresult = {
                result: "success",
                message: "Season was created succesfully"
            };
            _this.showResult();
        }, function (err) {
            console.log(err);
            _this.displayresults = [
                _this.displayresult = {
                    result: "Failed",
                    message: JSON.stringify(err.error.err.errors.name.message)
                },
            ];
            _this.showResult();
        });
    };
    SeasonCreateComponent.prototype.showResult = function () {
        var _this = this;
        this.showResultBox = true;
        setTimeout(function () {
            _this.showResultBox = false;
        }, 5000);
    };
    SeasonCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-create',
            template: __webpack_require__(/*! ./season-create.component.html */ "./src/app/seasons/season-create/season-create.component.html"),
            styles: [__webpack_require__(/*! ./season-create.component.css */ "./src/app/seasons/season-create/season-create.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SeasonCreateComponent);
    return SeasonCreateComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season-delete/season-delete.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/seasons/season-delete/season-delete.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29uLWRlbGV0ZS9zZWFzb24tZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/seasons/season-delete/season-delete.component.html":
/*!********************************************************************!*\
  !*** ./src/app/seasons/season-delete/season-delete.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n  \r\n  <div class=\"card-body text-center\">\r\n     <h3>Weet je zeker dat je deze operation wilt verwijderen?</h3>\r\n     <br/>\r\n     <button type=\"button\"\t(click)=\"deleteSeason()\" class=\"btn btn-danger createbutton\">Verwijder Operation</button>\r\n    </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/seasons/season-delete/season-delete.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/seasons/season-delete/season-delete.component.ts ***!
  \******************************************************************/
/*! exports provided: SeasonDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonDeleteComponent", function() { return SeasonDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/siege.service */ "./src/app/siege.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeasonDeleteComponent = /** @class */ (function () {
    function SeasonDeleteComponent(_siegeService) {
        this._siegeService = _siegeService;
    }
    SeasonDeleteComponent.prototype.ngOnInit = function () {
    };
    SeasonDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-delete',
            template: __webpack_require__(/*! ./season-delete.component.html */ "./src/app/seasons/season-delete/season-delete.component.html"),
            styles: [__webpack_require__(/*! ./season-delete.component.css */ "./src/app/seasons/season-delete/season-delete.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"]])
    ], SeasonDeleteComponent);
    return SeasonDeleteComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season-detail/season-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/seasons/season-detail/season-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29uLWRldGFpbC9zZWFzb24tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/seasons/season-detail/season-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/seasons/season-detail/season-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.showResultBox\">\r\n  <div class=\"content login-page form login-form\">\r\n    <h4>{{this.displayresult.result}}</h4>\r\n    <p>{{this.displayresult.message}}</p>\r\n  </div>\r\n</div>\r\n\r\n<app-season-edit [season]=\"selectedSeason\"></app-season-edit>\r\n<br>\r\n<div *ngIf=\"season\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h5 class=\"card-title\">\r\n        {{season.name}} season information\r\n      </h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p>\r\n        <br>\r\n        <b>Name:</b>\r\n        <br />\r\n        {{season.name}}\r\n        <br />\r\n        <b>Description:</b>\r\n        <br />\r\n        {{season.description}}\r\n        <br />\r\n        <b>Year:</b>\r\n        <br />\r\n        {{ season.year }}\r\n        <br />\r\n      </p>\r\n    </div>\r\n    <div class=\"card-footer text-center\">\r\n        <button *ngIf=\"_authService.loggedIn()\" (click)=\"onSelect(season)\" type=\"button\"\r\n        class=\"btn btn-warning btn-season float-left\">Edit</button>\r\n      <button [routerLink]=\"['/season', season._id]\" routerLinkActive=\"active\" type=\"button\"\r\n        class=\"btn btn-primary btn-season\">View</button>\r\n      <button *ngIf=\"_authService.loggedIn()\" (click)=\"deleteSeason()\" type=\"button\"\r\n        class=\"btn btn-danger btn-season float-right\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/seasons/season-detail/season-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/seasons/season-detail/season-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: SeasonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonDetailComponent", function() { return SeasonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _season_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../season.model */ "./src/app/seasons/season.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _seasons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../seasons.component */ "./src/app/seasons/seasons.component.ts");
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeasonDetailComponent = /** @class */ (function () {
    function SeasonDetailComponent(_siegeService, _authGuard, _authService, _seasonsComp, _seasonComp) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this._seasonsComp = _seasonsComp;
        this._seasonComp = _seasonComp;
        this.worlds = [];
        this.operators = [];
    }
    SeasonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.display = false;
        this.displayS = false;
        return this._siegeService.getOperators()
            .subscribe(function (res) { return _this.operators = res; }, function (err) { return console.log(err); }),
            this._siegeService.getWorlds()
                .subscribe(function (res) { return _this.worlds = res; }, function (err) { return console.log(err); });
    };
    SeasonDetailComponent.prototype.onSelect = function (season) {
        this.selectedSeason = season;
        this.popuSeason = season;
    };
    SeasonDetailComponent.prototype.deleteSeason = function () {
        var _this = this;
        console.log(this.season.name);
        this._siegeService.deleteSeason(this.season.name)
            .subscribe(function (res) {
            _this._seasonComp.refreshSeasons();
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    SeasonDetailComponent.prototype.onSelectOperator = function (season) {
        this.display = true;
        this.season = this.season;
        this.opOfSeasonName = this.season.operator;
    };
    SeasonDetailComponent.prototype.seasonHas = function (operator) {
        if (operator.name === null || undefined)
            return false;
        if (operator._id == this.opOfSeasonName)
            return true;
        else
            return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _season_model__WEBPACK_IMPORTED_MODULE_2__["Season"])
    ], SeasonDetailComponent.prototype, "season", void 0);
    SeasonDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-detail',
            template: __webpack_require__(/*! ./season-detail.component.html */ "./src/app/seasons/season-detail/season-detail.component.html"),
            styles: [__webpack_require__(/*! ./season-detail.component.css */ "./src/app/seasons/season-detail/season-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _seasons_component__WEBPACK_IMPORTED_MODULE_4__["SeasonsComponent"], _seasons_component__WEBPACK_IMPORTED_MODULE_4__["SeasonsComponent"]])
    ], SeasonDetailComponent);
    return SeasonDetailComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season-edit/season-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/seasons/season-edit/season-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29uLWVkaXQvc2Vhc29uLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/seasons/season-edit/season-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/seasons/season-edit/season-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"season\">\r\n    <div class=\"card mt-5 mb-5\">\r\n        <div class=\"card-heading text-center\">\r\n          Edit {{season.name}}\r\n          <hr />\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form class=\"form\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Operation name:</label>\r\n              <input type=\"text\" [(ngModel)]=\"seasonNewName\" name=\"name\" class=\"form-control rounded-0\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Description: </label>\r\n              <input type=\"text\" [(ngModel)]=\"seasonNewDesc\" name=\"description\" class=\"form-control rounded-0\"\r\n                required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Year: </label>\r\n              <input type=\"number\" [(ngModel)]=\"seasonNewYear\" name=\"year\" class=\"form-control rounded-0\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Season: </label>\r\n              <input type=\"number\" [(ngModel)]=\"seasonNewSeason\" name=\"season\" class=\"form-control rounded-0\"\r\n                required>\r\n            </div>    \r\n           \r\n            <button type=\"button\" (click)=\"editSeason()\" class=\"btn btn-primary float-right\">Confirm</button>\r\n          </form>\r\n        </div>\r\n      \r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/seasons/season-edit/season-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/seasons/season-edit/season-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: SeasonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonEditComponent", function() { return SeasonEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _season_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../season.model */ "./src/app/seasons/season.model.ts");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var src_app_worlds_world_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/worlds/world.model */ "./src/app/worlds/world.model.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _seasons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../seasons.component */ "./src/app/seasons/seasons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeasonEditComponent = /** @class */ (function () {
    // seasonEditForm = {
    //     name: String,
    //     description: String,
    //     year: Number,
    //     season: Number,
    //     operator: Character,
    //     world: World
    // }
    function SeasonEditComponent(_siegeService, _authService, _seasonComp) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this._seasonComp = _seasonComp;
        this.operators = [];
        this.worlds = [];
        this.seasonNewName = '';
        this.seasonNewDesc = '';
        this.seasonNewYear = 0;
        this.seasonNewSeason = 0;
    }
    SeasonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this._siegeService.getOperators()
            .subscribe(function (res) { return _this.operators = res; }, function (err) { return console.log(err); }),
            this._siegeService.getWorlds()
                .subscribe(function (res) { return _this.worlds = res; }, function (err) { return console.log(err); });
    };
    SeasonEditComponent.prototype.editSeason = function () {
        var _this = this;
        if (this._authService.loggedIn) {
            this.seasonEdit = new _season_model__WEBPACK_IMPORTED_MODULE_1__["Season"](this.season.name, this.seasonNewName, this.seasonNewDesc, this.seasonNewYear, this.seasonNewSeason);
            this._siegeService.editSeason(this.seasonEdit)
                .subscribe(function (res) {
                _this._seasonComp.refreshSeasons();
                console.log(res);
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _season_model__WEBPACK_IMPORTED_MODULE_1__["Season"])
    ], SeasonEditComponent.prototype, "season", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_worlds_world_model__WEBPACK_IMPORTED_MODULE_3__["World"])
    ], SeasonEditComponent.prototype, "world", void 0);
    SeasonEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-edit',
            template: __webpack_require__(/*! ./season-edit.component.html */ "./src/app/seasons/season-edit/season-edit.component.html"),
            styles: [__webpack_require__(/*! ./season-edit.component.css */ "./src/app/seasons/season-edit/season-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _seasons_component__WEBPACK_IMPORTED_MODULE_5__["SeasonsComponent"]])
    ], SeasonEditComponent);
    return SeasonEditComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season-populate/season-populate.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/seasons/season-populate/season-populate.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29uLXBvcHVsYXRlL3NlYXNvbi1wb3B1bGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/seasons/season-populate/season-populate.component.html":
/*!************************************************************************!*\
  !*** ./src/app/seasons/season-populate/season-populate.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n    <h5 class=\"card-title\">Populate season: </h5>\r\n    <hr />\r\n    <div class=\"form-group\">\r\n      <label>Season: </label>\r\n      <select id=\"SeasonSelector\" [(ngModel)]=\"seasonCreateData.name\" name=\"name\" style=\"width: 100%;\"\r\n        class=\"dropdownoperator\">\r\n        <option *ngFor=\"let season of seasons\" value=\"{{season._id}}\">{{season.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Operator: </label>\r\n      <select id=\"OperatorSelector\" [(ngModel)]=\"seasonCreateData.operatorName\" name=\"operatorName\" style=\"width: 100%;\"\r\n        class=\"dropdownoperator\">\r\n        <option *ngFor=\"let operator of operators\" value=\"{{operator._id}}\">{{operator.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Map: </label>\r\n      <select id=\"WorldSelector\" [(ngModel)]=\"seasonCreateData.siegeMapName\" name=\"siegeMapName\" style=\"width: 100%;\"\r\n        class=\"dropdownoperator\">\r\n        <option *ngFor=\"let map of maps\" value=\"{{map._id}}\">{{map.name}}</option>\r\n      </select>\r\n    </div>\r\n    <a (click)=\"populateSeason()\" class=\"btn btn-warning  mt-2 mr-2\">Confirm</a>\r\n    <a routerLink='/seasons' routerLinkActive=\"active\" class=\"btn btn-primary\">Cancel</a>\r\n  </div>>"

/***/ }),

/***/ "./src/app/seasons/season-populate/season-populate.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/seasons/season-populate/season-populate.component.ts ***!
  \**********************************************************************/
/*! exports provided: SeasonPopulateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonPopulateComponent", function() { return SeasonPopulateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _season_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../season.model */ "./src/app/seasons/season.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SeasonPopulateComponent = /** @class */ (function () {
    function SeasonPopulateComponent(_siegeService, _router, _authService) {
        this._siegeService = _siegeService;
        this._router = _router;
        this._authService = _authService;
        this.seasonCreateData = {};
        this.maps = [];
        this.operators = [];
        this.seasons = [];
    }
    SeasonPopulateComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this._siegeService.getOperators()
            .subscribe(function (res) { return _this.operators = res; }, function (err) { return console.log(err); }),
            this._siegeService.getWorlds()
                .subscribe(function (res) { return _this.maps = res; }, function (err) { return console.log(err); }),
            this._siegeService.getSeasons()
                .subscribe(function (res) { return _this.seasons = res; }, function (err) { return console.log(err); });
    };
    SeasonPopulateComponent.prototype.populateSeason = function () {
        var _this = this;
        this._siegeService.populateSeason(this.seasonCreateData)
            .subscribe(function (res) {
            console.log(res);
            _this._router.navigate(['/operations']);
        });
        (function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _season_model__WEBPACK_IMPORTED_MODULE_4__["Season"])
    ], SeasonPopulateComponent.prototype, "season", void 0);
    SeasonPopulateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-populate',
            template: __webpack_require__(/*! ./season-populate.component.html */ "./src/app/seasons/season-populate/season-populate.component.html"),
            styles: [__webpack_require__(/*! ./season-populate.component.css */ "./src/app/seasons/season-populate/season-populate.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SeasonPopulateComponent);
    return SeasonPopulateComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/seasons/season-with-id/season-width-id/season-width-id.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29uLXdpdGgtaWQvc2Vhc29uLXdpZHRoLWlkL3NlYXNvbi13aWR0aC1pZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/seasons/season-with-id/season-width-id/season-width-id.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-season-edit [season]=\"selectedSeason\"></app-season-edit> -->\r\n\r\n\r\n\r\n<div *ngIf=\"this.seasonById\">\r\n    <div class=\"card mt-2\">\r\n        <div class=\"card-header\">\r\n                <h5 class=\"card-title\">\r\n                        Detailed Information about {{this.seasonById.name | uppercase}}\r\n                    </h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <p class=\"card-text\">\r\n\r\n                <b>Name:</b>\r\n                <br />\r\n                {{this.seasonById.name}}\r\n                <br />\r\n                <b>Description:</b>\r\n                <br />\r\n                {{this.seasonById.description}}\r\n                <br />\r\n                <b>Year: </b>\r\n                <br />\r\n                {{this.seasonById.year}}\r\n                <br />\r\n                <b>Season: </b>\r\n                <br />\r\n                {{this.seasonById.season}}\r\n                <br />\r\n            </p>\r\n\r\n           \r\n        </div>\r\n        <div class=\"card-footer text-center\">\r\n            <small>This component was made for Richardson maturity level 2</small>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"this.display\" class=\"mt-5\">\r\n        <div *ngFor=\"let operator of operators\">\r\n            <div class=\"card\" *ngIf=\"seasonHas(operator)\">\r\n    \r\n                <div class=\"card-title\">\r\n                    <h5>\r\n                        {{operator.name}}\r\n                    </h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <b>\r\n                        Description:\r\n                    </b>\r\n                    {{operator.description}}\r\n                    <br />\r\n                    <b>\r\n                        Side\r\n                    </b>\r\n                    {{operator.side}}\r\n    \r\n                </div>\r\n            </div>\r\n    \r\n        </div>\r\n    </div> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/seasons/season-with-id/season-width-id/season-width-id.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SeasonWidthIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonWidthIdComponent", function() { return SeasonWidthIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _season_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../season.model */ "./src/app/seasons/season.model.ts");
/* harmony import */ var src_app_siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeasonWidthIdComponent = /** @class */ (function () {
    function SeasonWidthIdComponent(route, _siegeService) {
        this.route = route;
        this._siegeService = _siegeService;
    }
    SeasonWidthIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log("Id before return: " + params['id']);
            return _this._siegeService.getSeasonById(params.id)
                .subscribe(function (res) {
                _this.seasonById = res;
                console.log('res: ' + res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _season_model__WEBPACK_IMPORTED_MODULE_1__["Season"])
    ], SeasonWidthIdComponent.prototype, "season", void 0);
    SeasonWidthIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-width-id',
            template: __webpack_require__(/*! ./season-width-id.component.html */ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.html"),
            styles: [__webpack_require__(/*! ./season-width-id.component.css */ "./src/app/seasons/season-with-id/season-width-id/season-width-id.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"]])
    ], SeasonWidthIdComponent);
    return SeasonWidthIdComponent;
}());



/***/ }),

/***/ "./src/app/seasons/season.model.ts":
/*!*****************************************!*\
  !*** ./src/app/seasons/season.model.ts ***!
  \*****************************************/
/*! exports provided: Season */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Season", function() { return Season; });
var Season = /** @class */ (function () {
    function Season(_id, name, description, year, season, world, operator) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.year = year;
        this.season = season;
        this.world = world;
        this.operator = operator;
    }
    return Season;
}());



/***/ }),

/***/ "./src/app/seasons/seasons.component.css":
/*!***********************************************!*\
  !*** ./src/app/seasons/seasons.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXNvbnMvc2Vhc29ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/seasons/seasons.component.html":
/*!************************************************!*\
  !*** ./src/app/seasons/seasons.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\" *ngIf=\"_authService.loggedIn()\">\r\n    <div class=\"card-body\">\r\n        <a routerLink=\"/operations/create\" class=\"btn btn-success editbutton\">Niewe Operation aanmaken</a>\r\n        <a routerLink=\"/operations/populate\" class=\"btn btn-primary editbutton\">Populate bestaande Operation</a>\r\n        \r\n      </div>\r\n  </div>\r\n\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let season of seasons\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">\r\n          {{season.name}}\r\n        </h5>\r\n        <p class=\"card-text\">\r\n         Year {{season.year}}, Season: {{season.season}}\r\n        </p>\r\n        <a (click)=\"onSelect(season)\" class=\"btn btn-primary\">Meer Informatie</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-season-detail [season]=\"selectedSeason\"></app-season-detail>\r\n"

/***/ }),

/***/ "./src/app/seasons/seasons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/seasons/seasons.component.ts ***!
  \**********************************************/
/*! exports provided: SeasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsComponent", function() { return SeasonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeasonsComponent = /** @class */ (function () {
    function SeasonsComponent(_siegeService, _authService) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this.seasons = [];
    }
    SeasonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._siegeService.getSeasons()
            .subscribe(function (res) { return _this.seasons = res; }, function (err) { return console.log; });
    };
    SeasonsComponent.prototype.onSelect = function (season) {
        this.selectedSeason = season;
    };
    SeasonsComponent.prototype.refreshSeasons = function () {
        var _this = this;
        return this._siegeService.getSeasons()
            .subscribe(function (res) { return _this.seasons = res; }, function (err) { return console.log(err); });
    };
    SeasonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seasons',
            template: __webpack_require__(/*! ./seasons.component.html */ "./src/app/seasons/seasons.component.html"),
            styles: [__webpack_require__(/*! ./seasons.component.css */ "./src/app/seasons/seasons.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SeasonsComponent);
    return SeasonsComponent;
}());



/***/ }),

/***/ "./src/app/siege.service.ts":
/*!**********************************!*\
  !*** ./src/app/siege.service.ts ***!
  \**********************************/
/*! exports provided: SiegeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiegeService", function() { return SiegeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiegeService = /** @class */ (function () {
    function SiegeService(http) {
        this.http = http;
        this.seasons = [];
        this.headers = new Headers({ 'Content-Type': 'applicaiton/json' });
        this.seasonsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //ListURLs
        this._worldsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "/api/worlds/";
        this._operatorsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "/api/operators/";
        this._seasonsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "/api/seasons/";
        this._userUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "/api/users/";
        //Detail URLs
        this._worldUrl = "https://siegewiki.herokuapp.com/api/world/";
        this._operatorUrl = "https://siegewiki.herokuapp.com/api/operator/";
        this._seasonUrl = "https://siegewiki.herokuapp.com/api/season/";
    }
    //WORLDS API CALLS
    SiegeService.prototype.getWorlds = function () {
        return this.http.get(this._worldsUrl);
    };
    SiegeService.prototype.getWorldById = function (_id) {
        console.log(this._worldUrl + '' + _id);
        return this.http.get(this._worldUrl + '' + _id);
    };
    SiegeService.prototype.addWorld = function (world) {
        return this.http.post(this._worldUrl, world);
    };
    SiegeService.prototype.editWorld = function (_id, world) {
        console.log(world);
        return this.http.put(this._worldUrl + '' + _id, world);
    };
    SiegeService.prototype.deleteWorld = function (_id) {
        console.log(_id);
        return this.http.delete(this._worldUrl + '' + _id);
    };
    //OPERATORS API CALLS
    SiegeService.prototype.getOperators = function () {
        return this.http.get(this._operatorsUrl);
    };
    SiegeService.prototype.getOperatorById = function (_id) {
        return this.http.get(this._operatorUrl + '' + _id);
    };
    SiegeService.prototype.addOperator = function (operator) {
        return this.http.post(this._operatorsUrl, operator);
    };
    SiegeService.prototype.editOperator = function (operator) {
        console.log('ewaja' + operator);
        return this.http.put(this._operatorsUrl, operator);
    };
    SiegeService.prototype.deleteOperator = function (name) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'name': name
            })
        };
        return this.http.delete(this._operatorsUrl, httpOptions);
    };
    //SEASONS API CALLS
    SiegeService.prototype.getSeasons = function () {
        return this.http.get(this._seasonsUrl);
    };
    SiegeService.prototype.getSeasonById = function (_id) {
        return this.http.get(this._seasonUrl + '' + _id);
    };
    SiegeService.prototype.addSeason = function (season) {
        return this.http.post(this._seasonsUrl, season);
    };
    SiegeService.prototype.editSeason = function (season) {
        console.log('ewaja' + season);
        return this.http.put(this._seasonsUrl, season);
    };
    SiegeService.prototype.populateSeason = function (season) {
        console.log(season);
        return this.http.put(this._seasonsUrl + 'populate/', season);
    };
    SiegeService.prototype.deleteSeason = function (name) {
        console.log(name);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'name': name
            })
        };
        return this.http.delete(this._seasonsUrl, httpOptions);
    };
    //USER DELETE
    SiegeService.prototype.deleteUser = function (name, pass) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'name': name,
                'password': pass
            })
        };
        return this.http.delete(this._userUrl, httpOptions);
    };
    SiegeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SiegeService);
    return SiegeService;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/user-delete/user-delete.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-delete/user-delete.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGVsZXRlL3VzZXItZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-delete/user-delete.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-delete/user-delete.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mx-auto\">\r\n        \r\n  \r\n        <!-- form card login -->\r\n        <div class=\"card rounded-0\">\r\n          <div class=\"card-header\">\r\n            <h3 class=\"mb-0\">Delete User</h3>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form class=\"form\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name1\">name</label>\r\n                <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"name\" name=\"name\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" class=\"form-control rounded-0\" [(ngModel)]=\"password\" name=\"password\" required>\r\n              </div>\r\n              <button type=\"button\" (click)=\"deleteUser()\" class=\"btn btn-danger createbutton\">Delete</button>\r\n            </form>\r\n          </div>\r\n          <!--/card-block-->\r\n        </div>\r\n        <!-- /form card login -->\r\n  \r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/user-delete/user-delete.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-delete/user-delete.component.ts ***!
  \******************************************************/
/*! exports provided: UserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteComponent", function() { return UserDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../siege.service */ "./src/app/siege.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDeleteComponent = /** @class */ (function () {
    function UserDeleteComponent(_authGuard, _siegeService) {
        this._authGuard = _authGuard;
        this._siegeService = _siegeService;
    }
    UserDeleteComponent.prototype.ngOnInit = function () {
        this._authGuard.canActivate();
    };
    UserDeleteComponent.prototype.deleteUser = function () {
        console.log(this.name);
        this._siegeService.deleteUser(this.name, this.password)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    UserDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-delete',
            template: __webpack_require__(/*! ./user-delete.component.html */ "./src/app/user-delete/user-delete.component.html"),
            styles: [__webpack_require__(/*! ./user-delete.component.css */ "./src/app/user-delete/user-delete.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
            _siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"]])
    ], UserDeleteComponent);
    return UserDeleteComponent;
}());



/***/ }),

/***/ "./src/app/worlds/world-create/world-create.component.css":
/*!****************************************************************!*\
  !*** ./src/app/worlds/world-create/world-create.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkcy93b3JsZC1jcmVhdGUvd29ybGQtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/worlds/world-create/world-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/worlds/world-create/world-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n    <div class=\"card-heading text-center\">\r\n      Create New Map\r\n      <hr/>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form class=\"form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name1\">Map name:</label>\r\n            <input type=\"text\" [(ngModel)]=\"worldCreateForm.name\" name=\"name\" class=\"form-control rounded-0\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Description: </label>\r\n            <input type=\"text\" [(ngModel)]=\"worldCreateForm.description\" name=\"description\" class=\"form-control rounded-0\"  required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label>availableInRanked: </label>\r\n              <input type=\"checkbox\" [(ngModel)]=\"worldCreateForm.availableInRanked\" name=\"availableInRanked\" class=\"form-control rounded-0\"  required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Season</label>\r\n              <select class=\"string-box btn text-white rounding half-black list-item mt-1 text-center\" [(ngModel)]=\"worldCreateForm.season\"  name=\"season\">\r\n                  <option class=\"string-box btn text-white rounding half-black list-item mt-1 text-center\">Selecteer een Season</option>\r\n                  <option class=\"string-box btn text-white rounding half-black list-item mt-1 text-center\" *ngFor=\"let season of seasons\" value=\"{{season._id}}\">{{season.name}}</option>\r\n              </select>\r\n            </div>\r\n            \r\n          <button type=\"button\" (click)=\"addWorld()\" class=\"btn btn-primary float-right\">Confirm</button>\r\n        </form>\r\n      </div>\r\n    \r\n  </div>"

/***/ }),

/***/ "./src/app/worlds/world-create/world-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/worlds/world-create/world-create.component.ts ***!
  \***************************************************************/
/*! exports provided: WorldCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldCreateComponent", function() { return WorldCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_seasons_season_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seasons/season.model */ "./src/app/seasons/season.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorldCreateComponent = /** @class */ (function () {
    function WorldCreateComponent(_siegeService, _router, _auth) {
        this._siegeService = _siegeService;
        this._router = _router;
        this._auth = _auth;
        this.worldCreateForm = {
            name: String,
            description: String,
            availableInRanked: Boolean,
            season: {}
        };
    }
    WorldCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.loggedIn();
        this._siegeService.getSeasons()
            .subscribe(function (res) { return _this.seasons = res; }, function (err) { return console.log(err); });
    };
    WorldCreateComponent.prototype.addWorld = function () {
        var _this = this;
        this._siegeService.addWorld(this.worldCreateForm)
            .subscribe(function (res) {
            _this._router.navigate(['/maps']);
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_seasons_season_model__WEBPACK_IMPORTED_MODULE_4__["Season"])
    ], WorldCreateComponent.prototype, "season", void 0);
    WorldCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-world-create',
            template: __webpack_require__(/*! ./world-create.component.html */ "./src/app/worlds/world-create/world-create.component.html"),
            styles: [__webpack_require__(/*! ./world-create.component.css */ "./src/app/worlds/world-create/world-create.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], WorldCreateComponent);
    return WorldCreateComponent;
}());



/***/ }),

/***/ "./src/app/worlds/world-delete/world-delete.component.css":
/*!****************************************************************!*\
  !*** ./src/app/worlds/world-delete/world-delete.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkcy93b3JsZC1kZWxldGUvd29ybGQtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/worlds/world-delete/world-delete.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/worlds/world-delete/world-delete.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\">\r\n  \r\n  <div class=\"card-body text-center\">\r\n     <h3>Weet je zeker dat je deze map wilt verwijderen?</h3>\r\n     <br/>\r\n     <button type=\"button\"\t(click)=\"deleteWorld()\" class=\"btn btn-danger createbutton\">Verwijder Map</button>\r\n    </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/worlds/world-delete/world-delete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/worlds/world-delete/world-delete.component.ts ***!
  \***************************************************************/
/*! exports provided: WorldDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldDeleteComponent", function() { return WorldDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _world_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world.model */ "./src/app/worlds/world.model.ts");
/* harmony import */ var src_app_siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _worlds_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../worlds.component */ "./src/app/worlds/worlds.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorldDeleteComponent = /** @class */ (function () {
    function WorldDeleteComponent(_siegeService, _worldsComp, route) {
        this._siegeService = _siegeService;
        this._worldsComp = _worldsComp;
        this.route = route;
    }
    WorldDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this._siegeService.getWorldById(params.id)
                .subscribe(function (res) {
                _this.worldToDelete = res;
                //console.log(this.worldById)
            }, function (err) {
                console.log(err);
            });
        });
    };
    WorldDeleteComponent.prototype.deleteWorld = function () {
        var _this = this;
        this._siegeService.deleteWorld(this.worldToDelete._id)
            .subscribe(function (res) {
            _this._worldsComp.refreshWorlds();
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _world_model__WEBPACK_IMPORTED_MODULE_1__["World"])
    ], WorldDeleteComponent.prototype, "world", void 0);
    WorldDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-world-delete',
            template: __webpack_require__(/*! ./world-delete.component.html */ "./src/app/worlds/world-delete/world-delete.component.html"),
            styles: [__webpack_require__(/*! ./world-delete.component.css */ "./src/app/worlds/world-delete/world-delete.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"], _worlds_component__WEBPACK_IMPORTED_MODULE_3__["WorldsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WorldDeleteComponent);
    return WorldDeleteComponent;
}());



/***/ }),

/***/ "./src/app/worlds/world-detail/world-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/worlds/world-detail/world-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkcy93b3JsZC1kZXRhaWwvd29ybGQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/worlds/world-detail/world-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/worlds/world-detail/world-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-world-edit [world]=\"selectedWorld\"></app-world-edit>\r\n<div *ngIf=\"world\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n          <h5 class=\"card-title\">\r\n              Detailed Information about {{world.name | uppercase}}\r\n            </h5>\r\n      </div>\r\n        <div class=\"card-body\">           \r\n              <p class=\"card-text\">\r\n\r\n                <b>Name:</b> \r\n                <br/>\r\n                {{world.name}}\r\n                <br/>\r\n                <b>Description:</b> \r\n                <br/>\r\n                {{world.description}}\r\n                <br/>\r\n                <b>season: </b>\r\n                <br/>\r\n                {{world.season}}\r\n                <br/>\r\n                <b>Available in Ranked: </b>\r\n                <br/>\r\n                {{world.availableInRanked}}\r\n              </p>\r\n              </div>\r\n              <div class=\"card-footer text-center\">\r\n                  \r\n                  \r\n                  <button [routerLink]=\"['/map', world._id]\" routerLinkActive=\"active\" type=\"button\"\r\n                  class=\"btn btn-primary btn-season\">View</button>\r\n                 \r\n              </div>  \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/worlds/world-detail/world-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/worlds/world-detail/world-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: WorldDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldDetailComponent", function() { return WorldDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _world_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world.model */ "./src/app/worlds/world.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _worlds_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../worlds.component */ "./src/app/worlds/worlds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorldDetailComponent = /** @class */ (function () {
    function WorldDetailComponent(_siegeService, _authService, _worldsComp) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this._worldsComp = _worldsComp;
    }
    WorldDetailComponent.prototype.ngOnInit = function () {
    };
    WorldDetailComponent.prototype.onSelect = function (world) {
        this.selectedWorld = world;
    };
    WorldDetailComponent.prototype.deleteWorld = function () {
        var _this = this;
        this._siegeService.deleteWorld(this.world.name)
            .subscribe(function (res) {
            _this._worldsComp.refreshWorlds();
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _world_model__WEBPACK_IMPORTED_MODULE_2__["World"])
    ], WorldDetailComponent.prototype, "world", void 0);
    WorldDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-world-detail',
            template: __webpack_require__(/*! ./world-detail.component.html */ "./src/app/worlds/world-detail/world-detail.component.html"),
            styles: [__webpack_require__(/*! ./world-detail.component.css */ "./src/app/worlds/world-detail/world-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _worlds_component__WEBPACK_IMPORTED_MODULE_4__["WorldsComponent"]])
    ], WorldDetailComponent);
    return WorldDetailComponent;
}());



/***/ }),

/***/ "./src/app/worlds/world-edit/world-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/worlds/world-edit/world-edit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkcy93b3JsZC1lZGl0L3dvcmxkLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/worlds/world-edit/world-edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/worlds/world-edit/world-edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"worldById\">\r\n  <div class=\"card mt-5 mb-5\">\r\n    <div class=\"card-heading text-center\">\r\n      Edit {{worldById.name}}\r\n      <hr/>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form class=\"form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name1\">Map name:</label>\r\n            <input type=\"text\" [(ngModel)]=\"newName\" name=\"name\" class=\"form-control rounded-0\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Description: </label>\r\n            <input type=\"text\" [(ngModel)]=\"newWorldDesc\" name=\"description\" class=\"form-control rounded-0\"  required>\r\n          </div>\r\n  \r\n      QUOTE OUT    <div class=\"form-group\">\r\n              <label>Season: </label>\r\n                <select id=\"OperationSelector\" [(ngModel)]=\" \" name=\"season\" style=\"width: 100%;\" class=\"dropdownoperator\" >\r\n                    <option *ngFor=\"let season of seasons\" value=\"{{season.name}}\" >{{season.name}}</option>\r\n                    </select>\r\n         TILL HERE   \r\n  \r\n          <div class=\"form-group\">\r\n              <label>availableInRanked: </label>\r\n              <input type=\"checkbox\" [(ngModel)]=\"newWorldRanked\" name=\"availableInRanked\" class=\"form-control rounded-0\" required>\r\n            </div>\r\n            \r\n          <button type=\"button\" (click)=\"editWorld()\" class=\"btn btn-primary float-right\">Confirm</button>\r\n        </form>\r\n      </div>\r\n    \r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div *ngIf=\"worldById\"class=\"card mt-2\"> -->\r\n  <div *ngIf=\"worldById\" class=\"card mt-2\">\r\n  <div class=\"card-header\">\r\n    <h2 class=\"card-title\">\r\n      Edit {{worldById.name}}\r\n    </h2>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"worldEdit\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 text-center\">\r\n              <mat-form-field appearance=\"fill\">\r\n              \r\n                  <input matInput placeholder=\"Naam van Map\" formControlName=\"name\">\r\n                  <mat-error *ngIf=\"name.invalid\">{{validateName()}}</mat-error>\r\n                </mat-form-field>\r\n            <mat-label>Beschikbaar in ranked</mat-label> <br />\r\n            <mat-checkbox class=\"mt-4\" formControlName=\"availableInRanked\">\r\n           \r\n            </mat-checkbox>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <label>Beschrijving</label>\r\n              <br />\r\n              <mat-form-field appearance=\"fill\">\r\n                  <input matInput placeholder=\"Beschrijving van de map\" formControlName=\"description\">\r\n                  <mat-error *ngIf=\"name.invalid\">{{validateName()}}</mat-error>\r\n                </mat-form-field>\r\n                <br/>\r\n\r\n                <label>Season</label>\r\n                <br/>\r\n                <mat-form-field>\r\n                  <mat-select [(value)]=\"season\" formControlName=\"season\">\r\n                    <div class=\"position-inline\">\r\n                        <mat-option>--Kies een season--</mat-option>\r\n                        <mat-option *ngFor=\"let season of seasons\" value=\"{{season._id}}\">{{season.name}}</mat-option>\r\n                    </div>                    \r\n                  </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div> \r\n\r\n        <button (click)=\"editWorld()\" type=\"button\" class=\"btn btn-primary float-right mb-2 mr-2\">Bevestig</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/worlds/world-edit/world-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/worlds/world-edit/world-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: WorldEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldEditComponent", function() { return WorldEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _world_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world.model */ "./src/app/worlds/world.model.ts");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _worlds_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../worlds.component */ "./src/app/worlds/worlds.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorldEditComponent = /** @class */ (function () {
    function WorldEditComponent(route, _router, _siegeService, _authService, _worldsComp, fb) {
        this.route = route;
        this._router = _router;
        this._siegeService = _siegeService;
        this._authService = _authService;
        this._worldsComp = _worldsComp;
        this.fb = fb;
        this.seasons = [];
    }
    WorldEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // return this._siegeService.getSeasons()
        // .subscribe(
        //   res => this.seasons = res,
        //   err => console.log(err)
        // )
        this.sub = this.route.params.subscribe(function (params) {
            //console.log(params['id']);
            return _this.worldEdit = _this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                availableInRanked: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                season: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            }),
                _this._siegeService.getSeasons().subscribe(function (res) { return _this.seasons = res; }, function (err) { return console.log(err); })
                , _this._siegeService.getWorldById(params.id)
                    .subscribe(function (res) {
                    _this.worldById = res;
                    //console.log(this.worldById)
                }, function (err) {
                    console.log(err);
                });
        });
    };
    WorldEditComponent.prototype.editWorld = function () {
        var _this = this;
        console.log(this.worldEdit.value);
        this._siegeService.editWorld(this.worldById._id, this.worldEdit.value)
            .subscribe(function (res) {
            console.log(res);
            _this._router.navigate(['/worlds/']);
        }, function (err) { return console.log(err); });
        // if (this._authService.loggedIn) {
        //   this.worldEdit = new World(this.worldById._id, this.newName, this.newWorldDesc, this.newWorldRanked)
        //   this._siegeService.editWorld(this.worldEdit)
        //   .subscribe(
        //     res => {
        //       this._worldsComp.refreshWorlds();
        //       console.log(res)},
        //     err => {
        //       console.log(err)
        //       console.log("form: " + this.worldEdit.value)
        //     }
        //   )}
    };
    Object.defineProperty(WorldEditComponent.prototype, "name", {
        get: function () {
            return this.worldEdit.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorldEditComponent.prototype, "description", {
        get: function () {
            return this.worldEdit.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorldEditComponent.prototype, "availableInRanked", {
        get: function () {
            return this.worldEdit.get('availableInRanked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorldEditComponent.prototype, "season", {
        get: function () {
            return this.worldEdit.get('season');
        },
        enumerable: true,
        configurable: true
    });
    WorldEditComponent.prototype.validateName = function () {
        return this.name.hasError('required') ? 'Voer een naam in' : '';
    };
    WorldEditComponent.prototype.validateDescription = function () {
        return this.description.hasError('required') ? 'Voer een beschrijving in' : '';
    };
    WorldEditComponent.prototype.validateAvailableInRanked = function () {
        return this.availableInRanked.hasError('required') ? 'Voer een keuze in' : '';
    };
    WorldEditComponent.prototype.validateSeason = function () {
        return this.season.hasError('required') ? 'Voer een season in' : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _world_model__WEBPACK_IMPORTED_MODULE_1__["World"])
    ], WorldEditComponent.prototype, "world", void 0);
    WorldEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-world-edit',
            template: __webpack_require__(/*! ./world-edit.component.html */ "./src/app/worlds/world-edit/world-edit.component.html"),
            styles: [__webpack_require__(/*! ./world-edit.component.css */ "./src/app/worlds/world-edit/world-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _siege_service__WEBPACK_IMPORTED_MODULE_2__["SiegeService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _worlds_component__WEBPACK_IMPORTED_MODULE_4__["WorldsComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], WorldEditComponent);
    return WorldEditComponent;
}());



/***/ }),

/***/ "./src/app/worlds/world-with-id/world-with-id.component.css":
/*!******************************************************************!*\
  !*** ./src/app/worlds/world-with-id/world-with-id.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkcy93b3JsZC13aXRoLWlkL3dvcmxkLXdpdGgtaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/worlds/world-with-id/world-with-id.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/worlds/world-with-id/world-with-id.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.worldById\">\r\n  <div class=\"card mt-2\">\r\n    <div class=\"card-header\">\r\n      <h5 class=\"card-title\">\r\n        Detailed information about {{this.worldById.name | uppercase}}\r\n      </h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <p class=\"card-text\">\r\n\r\n            <b>Name:</b>\r\n            <br />\r\n            {{this.worldById.name}}\r\n            <br />\r\n            <b>Description:</b>\r\n            <br />\r\n            {{this.worldById.description}}\r\n            <br />\r\n            <b>Season: </b>\r\n            <br />\r\n            {{this.worldById.season}}\r\n            <br />\r\n            <b>Available in ranked: </b>\r\n            <br />\r\n            {{this.worldById.availableInRanked}}\r\n            <br />\r\n        </p>\r\n    </div>\r\n    <div class=\"card-footer text-center\">\r\n        <button *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/map/edit', this.worldById._id]\" type=\"button\"\r\n        class=\"btn btn-warning float-left btn-season\">Edit</button>\r\n        <button *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/map/delete', this.worldById._id]\" type=\"button\"\r\n        class=\"btn btn-danger float-right btn-season\">Delete</button>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n "

/***/ }),

/***/ "./src/app/worlds/world-with-id/world-with-id.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/worlds/world-with-id/world-with-id.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorldWithIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldWithIdComponent", function() { return WorldWithIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _world_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world.model */ "./src/app/worlds/world.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_siege_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorldWithIdComponent = /** @class */ (function () {
    function WorldWithIdComponent(_router, route, _siegeService, _authService) {
        this._router = _router;
        this.route = route;
        this._siegeService = _siegeService;
        this._authService = _authService;
    }
    WorldWithIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params['id']);
            return _this._siegeService.getWorldById(params.id)
                .subscribe(function (res) {
                _this.worldById = res;
                console.log('res: ' + res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _world_model__WEBPACK_IMPORTED_MODULE_1__["World"])
    ], WorldWithIdComponent.prototype, "world", void 0);
    WorldWithIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-world-with-id',
            template: __webpack_require__(/*! ./world-with-id.component.html */ "./src/app/worlds/world-with-id/world-with-id.component.html"),
            styles: [__webpack_require__(/*! ./world-with-id.component.css */ "./src/app/worlds/world-with-id/world-with-id.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_siege_service__WEBPACK_IMPORTED_MODULE_3__["SiegeService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], WorldWithIdComponent);
    return WorldWithIdComponent;
}());



/***/ }),

/***/ "./src/app/worlds/world.model.ts":
/*!***************************************!*\
  !*** ./src/app/worlds/world.model.ts ***!
  \***************************************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
var World = /** @class */ (function () {
    function World(_id, name, description, availableInRanked) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.availableInRanked = availableInRanked;
    }
    return World;
}());



/***/ }),

/***/ "./src/app/worlds/worlds.component.css":
/*!*********************************************!*\
  !*** ./src/app/worlds/worlds.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkcy93b3JsZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/worlds/worlds.component.html":
/*!**********************************************!*\
  !*** ./src/app/worlds/worlds.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5\" *ngIf=\"_authService.loggedIn()\">\r\n    <div class=\"card-body\">\r\n        <a routerLink=\"/maps/create\" class=\"btn btn-success createbutton\">Niewe Map aanmaken</a>\r\n        \r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row mt-5\">\r\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let world of worlds\" [class.selected] = \"world === selectedWorld\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">\r\n          {{world.name}}\r\n        </h5>\r\n       \r\n        <button [routerLink]=\"['/map', world._id]\" routerLinkActive=\"active\" type=\"button\"\r\n                  class=\"btn btn-primary btn-season\">View</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-world-detail [world]=\"selectedWorld\"></app-world-detail>"

/***/ }),

/***/ "./src/app/worlds/worlds.component.ts":
/*!********************************************!*\
  !*** ./src/app/worlds/worlds.component.ts ***!
  \********************************************/
/*! exports provided: WorldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldsComponent", function() { return WorldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _siege_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../siege.service */ "./src/app/siege.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorldsComponent = /** @class */ (function () {
    function WorldsComponent(_siegeService, _authService) {
        this._siegeService = _siegeService;
        this._authService = _authService;
        this.worlds = [];
    }
    WorldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._siegeService.getWorlds()
            .subscribe(function (res) { return _this.worlds = res; }, function (err) { return console.log; });
    };
    WorldsComponent.prototype.onSelect = function (world) {
        this.selectedWorld = world;
    };
    WorldsComponent.prototype.refreshWorlds = function () {
        var _this = this;
        return this._siegeService.getWorlds()
            .subscribe(function (res) { return _this.worlds = res; }, function (err) { return console.log(err); });
    };
    WorldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worlds',
            template: __webpack_require__(/*! ./worlds.component.html */ "./src/app/worlds/worlds.component.html"),
            styles: [__webpack_require__(/*! ./worlds.component.css */ "./src/app/worlds/worlds.component.css")]
        }),
        __metadata("design:paramtypes", [_siege_service__WEBPACK_IMPORTED_MODULE_1__["SiegeService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], WorldsComponent);
    return WorldsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    serverUrl: 'https://siegewiki.herokuapp.com',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bottc\AngularProjects\SiegeWikiFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map