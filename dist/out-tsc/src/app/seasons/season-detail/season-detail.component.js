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
import { AuthService } from '../../auth.service';
var SeasonDetailComponent = /** @class */ (function () {
    function SeasonDetailComponent(_siegeService, _authService) {
        this._siegeService = _siegeService;
        this._authService = _authService;
    }
    SeasonDetailComponent.prototype.ngOnInit = function () {
    };
    SeasonDetailComponent.prototype.deleteSeason = function () {
        console.log(this.season.name);
        this._siegeService.deleteSeason(this.season.name, this.season.description, this.season.year, this.season.season, this.season.operator, this.season.world)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SeasonDetailComponent.prototype, "season", void 0);
    SeasonDetailComponent = __decorate([
        Component({
            selector: 'app-season-detail',
            templateUrl: './season-detail.component.html',
            styleUrls: ['./season-detail.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService, AuthService])
    ], SeasonDetailComponent);
    return SeasonDetailComponent;
}());
export { SeasonDetailComponent };
//# sourceMappingURL=season-detail.component.js.map