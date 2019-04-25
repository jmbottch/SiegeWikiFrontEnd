import { Component, OnInit, Input } from '@angular/core';
import { Operator } from 'semver';
import { ActivatedRoute } from '@angular/router';
import { SiegeService } from 'src/app/siege.service';
import { Character } from '../operator.model';
import { Season } from 'src/app/seasons/season.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-operator-with-id',
  templateUrl: './operator-with-id.component.html',
  styleUrls: ['./operator-with-id.component.css']
})
export class OperatorWithIdComponent implements OnInit {

  @Input() operator: Character
  operatorById : Character;
  private sub: any;
  operatorSeason: Season

  constructor(
    private route: ActivatedRoute,
    private _siegeService: SiegeService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      return this._siegeService.getOperatorById(params.id)
      .subscribe(
        res => {
          this.operatorById = res;
          this._siegeService.getSeasonById(this.operatorById.season)
          .subscribe(
            res => {
              this.operatorSeason = res;
              console.log('res: ' + res)
              console.log('operatorSeason: ' + this.operatorSeason)
            },err => console.log(err)
          )
        },
        err => {
          console.log(err)
        }
      )
    })
  }

}
