import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Season } from '../season.model';
import { AuthService } from '../../auth.service';
import { Character } from 'src/app/operators/operator.model';
import { World } from 'src/app/worlds/world.model';
import { SeasonsComponent } from '../seasons.component';
import { OperatorsComponent } from 'src/app/operators/operators.component';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  @Input() season: Season 
  selectedSeason: Season
  popSeason: Season

  constructor(private _siegeService: SiegeService, private _authService : AuthService, private _seasonsComp: SeasonsComponent, private _seasonComp: SeasonsComponent) { }

  ngOnInit() {
  }

  onSelect(season:Season) : void {
    this.selectedSeason = season;
  }
  onPopulate(season:Season) : void {
    this.popSeason = season;
  }
  deleteSeason() {
    console.log(this.season.name)
    this._siegeService.deleteSeason(this.season.name)
    .subscribe (
      res => {
        this._seasonComp.refreshSeasons();
        console.log(res)
      },
      err => console.log (err)
      
    )
  }
    
    }

