var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
var SiegeService = /** @class */ (function () {
    //Detail URLs
    // private _worldUrl = "http://siegewiki.herokuapp.com/api/world";
    // private _operatorUrl = "http://siegewiki.herokuapp.com/api/operator";
    // private _seasonUrl = "http://siegewiki.herokuapp.com/api/season";
    function SiegeService(http) {
        this.http = http;
        this.seasons = [];
        this.headers = new Headers({ 'Content-Type': 'applicaiton/json' });
        this.seasonsChanged = new Subject();
        //ListURLs
        this._worldsUrl = "http://siegewiki.herokuapp.com/api/worlds/";
        this._operatorsUrl = "http://siegewiki.herokuapp.com/api/operators/";
        this._seasonsUrl = "http://siegewiki.herokuapp.com/api/seasons/";
        this._userUrl = "http://siegewiki.herokuapp.com/api/users/";
    }
    //WORLDS API CALLS
    SiegeService.prototype.getWorlds = function () {
        return this.http.get(this._worldsUrl);
    };
    SiegeService.prototype.addWorld = function (world) {
        return this.http.post(this._worldsUrl, world);
    };
    SiegeService.prototype.deleteWorld = function (name) {
        console.log(name);
        this.http.delete(this._worldsUrl, name);
    };
    //OPERATORS API CALLS
    SiegeService.prototype.getOperators = function () {
        return this.http.get(this._operatorsUrl);
    };
    SiegeService.prototype.addOperator = function (operator) {
        return this.http.post(this._operatorsUrl, operator);
    };
    SiegeService.prototype.deleteOperator = function (name) {
        console.log(name);
        this.http.delete(this._operatorsUrl, name);
    };
    //SEASONS API CALLS
    SiegeService.prototype.getSeasons = function () {
        return this.http.get(this._seasonsUrl);
    };
    SiegeService.prototype.addSeason = function (season) {
        return this.http.post(this._seasonsUrl, season);
    };
    SiegeService.prototype.deleteSeason = function (name, desc, year, seas, oper, world) {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'name': name,
                'description': desc,
                'year': year,
                'season': seas,
                'operator': oper,
                'world': world
            })
        };
        return this.http.delete(this._userUrl, httpOptions);
    };
    //USER DELETE
    SiegeService.prototype.deleteUser = function (name, pass) {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'name': name,
                'password': pass
            })
        };
        return this.http.delete(this._userUrl, httpOptions);
    };
    SiegeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SiegeService);
    return SiegeService;
}());
export { SiegeService };
//# sourceMappingURL=siege.service.js.map