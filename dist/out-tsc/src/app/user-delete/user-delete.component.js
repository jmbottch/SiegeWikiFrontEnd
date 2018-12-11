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
import { AuthGuard } from '../auth.guard';
import { SiegeService } from '../siege.service';
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
        Component({
            selector: 'app-user-delete',
            templateUrl: './user-delete.component.html',
            styleUrls: ['./user-delete.component.css']
        }),
        __metadata("design:paramtypes", [AuthGuard,
            SiegeService])
    ], UserDeleteComponent);
    return UserDeleteComponent;
}());
export { UserDeleteComponent };
//# sourceMappingURL=user-delete.component.js.map