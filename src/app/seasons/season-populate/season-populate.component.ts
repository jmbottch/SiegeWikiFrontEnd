import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Season } from '../season.model';

@Component({
  selector: 'app-season-populate',
  templateUrl: './season-populate.component.html',
  styleUrls: ['./season-populate.component.css']
})
export class SeasonPopulateComponent implements OnInit {

  @Input() season : Season;
  seasonCreateData = {};
  maps = [];
  operators = [];
  seasons = [];

  constructor(
    private _siegeService: SiegeService,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    return this._siegeService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    ),
    this._siegeService.getWorlds()
    .subscribe(
      res => this.maps = res,
      err => console.log(err)
  ),
this._siegeService.getSeasons()
.subscribe(
  res => this.seasons = res,
  err => console.log(err)
)
  }

  populateSeason() {
    this._siegeService.populateSeason(this.seasonCreateData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/operations'])})
    err => console.log(err)
  }
}