var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SiegeService } from '../siege.service';
import { AuthService } from '../auth.service';
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
    WorldsComponent = __decorate([
        Component({
            selector: 'app-worlds',
            templateUrl: './worlds.component.html',
            styleUrls: ['./worlds.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService, AuthService])
    ], WorldsComponent);
    return WorldsComponent;
}());
export { WorldsComponent };
//# sourceMappingURL=worlds.component.js.map