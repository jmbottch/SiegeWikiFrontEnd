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
import { SiegeService } from 'src/app/siege.service';
var SeasonDeleteComponent = /** @class */ (function () {
    function SeasonDeleteComponent(_siegeService) {
        this._siegeService = _siegeService;
    }
    SeasonDeleteComponent.prototype.ngOnInit = function () {
    };
    SeasonDeleteComponent = __decorate([
        Component({
            selector: 'app-season-delete',
            templateUrl: './season-delete.component.html',
            styleUrls: ['./season-delete.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService])
    ], SeasonDeleteComponent);
    return SeasonDeleteComponent;
}());
export { SeasonDeleteComponent };
//# sourceMappingURL=season-delete.component.js.map