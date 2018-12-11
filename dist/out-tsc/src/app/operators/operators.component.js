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
    OperatorsComponent = __decorate([
        Component({
            selector: 'app-operators',
            templateUrl: './operators.component.html',
            styleUrls: ['./operators.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService, AuthService])
    ], OperatorsComponent);
    return OperatorsComponent;
}());
export { OperatorsComponent };
//# sourceMappingURL=operators.component.js.map