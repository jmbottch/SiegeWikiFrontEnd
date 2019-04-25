import { Component, OnInit, Input } from '@angular/core';
import { World } from '../world.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SiegeService } from 'src/app/siege.service';
import { AuthService } from 'src/app/auth.service';
import { Season } from 'src/app/seasons/season.model';

@Component({
  selector: 'app-world-with-id',
  templateUrl: './world-with-id.component.html',
  styleUrls: ['./world-with-id.component.css']
})
export class WorldWithIdComponent implements OnInit {

  @Input() world: World
  worldById: World;
  seasonById: Season;
  private sub: any;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _siegeService: SiegeService,
    private _authService: AuthService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      return this._siegeService.getWorldById(params.id)
        .subscribe(
          res => {
            this.worldById = res;
            console.log('res: ' + res);
            this._siegeService.getSeasonById(this.worldById.season)
              .subscribe(
                res => {
                  this.seasonById = res;
                  console.log(this.seasonById)
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
