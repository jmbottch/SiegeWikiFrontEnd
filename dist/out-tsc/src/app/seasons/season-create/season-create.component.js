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
var SeasonCreateComponent = /** @class */ (function () {
    function SeasonCreateComponent(_siegeService) {
        this._siegeService = _siegeService;
        this.title = 'Create Season';
        this.seasonCreate = {
            name: String,
            description: String,
            year: Number,
            season: Number
        };
    }
    SeasonCreateComponent.prototype.ngOnInit = function () {
    };
    SeasonCreateComponent.prototype.addSeason = function () {
        this._siegeService.addSeason(this.seasonCreate)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    SeasonCreateComponent = __decorate([
        Component({
            selector: 'app-season-create',
            templateUrl: './season-create.component.html',
            styleUrls: ['./season-create.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService])
    ], SeasonCreateComponent);
    return SeasonCreateComponent;
}());
export { SeasonCreateComponent };
//# sourceMappingURL=season-create.component.js.map