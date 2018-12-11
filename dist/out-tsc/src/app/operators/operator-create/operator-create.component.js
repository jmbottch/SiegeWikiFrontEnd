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
import { SiegeService } from '../../siege.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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
            console.log(res);
        }, function (err) {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    OperatorCreateComponent = __decorate([
        Component({
            selector: 'app-operator-create',
            templateUrl: './operator-create.component.html',
            styleUrls: ['./operator-create.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService, Router])
    ], OperatorCreateComponent);
    return OperatorCreateComponent;
}());
export { OperatorCreateComponent };
//# sourceMappingURL=operator-create.component.js.map