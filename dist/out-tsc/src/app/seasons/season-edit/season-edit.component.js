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
import { Season } from '../season.model';
import { Character } from '../../operators/operator.model';
import { SiegeService } from '../../siege.service';
import { World } from 'src/app/worlds/world.model';
var SeasonEditComponent = /** @class */ (function () {
    function SeasonEditComponent(_siegeService) {
        this._siegeService = _siegeService;
        this.operators = [];
        this.seasonEditForm = {
            name: String,
            description: String,
            year: Number,
            season: Number,
            operator: Character,
            world: World
        };
    }
    SeasonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this._siegeService.getOperators()
            .subscribe(function (res) { return _this.operators = res; }, function (err) { return console.log(err); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Season)
    ], SeasonEditComponent.prototype, "season", void 0);
    SeasonEditComponent = __decorate([
        Component({
            selector: 'app-season-edit',
            templateUrl: './season-edit.component.html',
            styleUrls: ['./season-edit.component.css']
        }),
        __metadata("design:paramtypes", [SiegeService])
    ], SeasonEditComponent);
    return SeasonEditComponent;
}());
export { SeasonEditComponent };
//# sourceMappingURL=season-edit.component.js.map