var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { World } from '../world.model';
import { AuthService } from '../../auth.service';
var WorldDetailComponent = /** @class */ (function () {
    function WorldDetailComponent(_siegeService, _authService) {
        this._siegeService = _siegeService;
        this._authService = _authService;
    }
    WorldDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", World)
    ], WorldDetailComponent.prototype, "world", void 0);
    WorldDetailComponent = __decorate([
        Component({
            selector: 'app-world-detail',
            templateUrl: './world-detail.component.html',
            styleUrls: ['./world-detail.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService, AuthService])
    ], WorldDetailComponent);
    return WorldDetailComponent;
}());
export { WorldDetailComponent };
//# sourceMappingURL=world-detail.component.js.map