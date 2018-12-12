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
import { Character } from '../operator.model';
import { AuthService } from 'src/app/auth.service';
var OperatorDetailComponent = /** @class */ (function () {
    function OperatorDetailComponent(_siegeService, _authService) {
        this._siegeService = _siegeService;
        this._authService = _authService;
    }
    OperatorDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Character)
    ], OperatorDetailComponent.prototype, "operator", void 0);
    OperatorDetailComponent = __decorate([
        Component({
            selector: 'app-operator-detail',
            templateUrl: './operator-detail.component.html',
            styleUrls: ['./operator-detail.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService, AuthService])
    ], OperatorDetailComponent);
    return OperatorDetailComponent;
}());
export { OperatorDetailComponent };
//# sourceMappingURL=operator-detail.component.js.map