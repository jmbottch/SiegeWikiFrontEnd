import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Season,  } from '../season.model';
import { AuthService } from '../../auth.service';
import { Character } from 'src/app/operators/operator.model';
import { World } from 'src/app/worlds/world.model';
import { SeasonsComponent } from '../seasons.component';
import { OperatorsComponent } from 'src/app/operators/operators.component';
import { AuthGuard } from 'src/app/auth.guard';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  @Input() season: Season 
  selectedSeason: Season
  popuSeason : Season

  worlds = [];
  operators = [];

  opOfSeasonName : {};

  display: Boolean;
  displayS : Boolean;
  

  constructor(private _siegeService: SiegeService, _authGuard : AuthGuard ,private _authService : AuthService, private _seasonsComp: SeasonsComponent, private _seasonComp: SeasonsComponent) { }

  ngOnInit() {
    this.display = false;
    this.displayS = false;
    return this._siegeService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    ),
    this._siegeService.getWorlds()
    .subscribe(
      res => this.worlds = res,
      err => console.log(err)
  )
  }
  

  onSelect(season:Season) : void {
    this.selectedSeason = season;
    this.popuSeason = season
    
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

  onSelectOperator(season: Season) {
    this.display = true;
    this.season = this.season
    this.opOfSeasonName = this.season.operator;
  }

  seasonHas(operator: any) {
    if (operator.name === null || undefined) return false;
    if (operator._id == this.opOfSeasonName) return true;
    else return false;
  }
    
    }

