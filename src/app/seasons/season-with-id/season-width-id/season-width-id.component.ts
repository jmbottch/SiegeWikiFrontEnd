import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../season.model';
import { SiegeService } from 'src/app/siege.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SeasonsComponent } from '../../seasons.component';
import { AuthService } from 'src/app/auth.service';
import { Character } from 'src/app/operators/operator.model';
import { World } from 'src/app/worlds/world.model';

@Component({
  selector: 'app-season-width-id',
  templateUrl: './season-width-id.component.html',
  styleUrls: ['./season-width-id.component.css']
})
export class SeasonWidthIdComponent implements OnInit {

  @Input() season: Season;
  seasonById: Season;
  private sub: any;
  operator1: Character ;
  operator2: Character;
  world: World;

  constructor(
    private route: ActivatedRoute,
    private _siegeService: SiegeService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log("Id before return: " + params['id']);
      return this._siegeService.getSeasonById(params.id)
        .subscribe(
          res => {
            this.seasonById = res;
            this._siegeService.getOperatorById(this.seasonById.operator1)
              .subscribe(
                res => {
                  this.operator1 = res
                },
                err => {
                  console.log(err)
                }
              ),
              this._siegeService.getOperatorById(this.seasonById.operator2)
                .subscribe(
                  res => {
                    this.operator2 = res
                  },
                  err => {
                    console.log(err)
                  }
                ),
              this._siegeService.getWorldById(this.seasonById.world)
                .subscribe(
                  res => {
                    this.world = res
                  },
                  err => {
                    console.log(err)
                  }
                )
          },
          err => {
            console.log(err)
          }
        )
    })
  }
}
