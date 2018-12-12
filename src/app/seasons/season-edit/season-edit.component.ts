import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { Character } from '../../operators/operator.model';
import { SiegeService } from '../../siege.service';
import { World } from 'src/app/worlds/world.model';
import { AuthService } from 'src/app/auth.service';
import { SeasonsComponent } from '../seasons.component';

@Component({
  selector: 'app-season-edit',
  templateUrl: './season-edit.component.html',
  styleUrls: ['./season-edit.component.css']
})
export class SeasonEditComponent implements OnInit {
  
  operators = [];
  @Input() season: Season;

  worlds = [];
  @Input() world: World;
  
  seasonEdit;
  seasonNewName = '';
  seasonNewDesc = '';
  seasonNewYear = 0;
  seasonNewSeason = 0;



  // seasonEditForm = {
  //     name: String,
  //     description: String,
  //     year: Number,
  //     season: Number,
  //     operator: Character,
  //     world: World
      
      
    
  // }

  constructor(private _siegeService: SiegeService, private _authService : AuthService, private _seasonComp: SeasonsComponent) { }

  ngOnInit() {
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

  editSeason() {
    if (this._authService.loggedIn) {
    this.seasonEdit = new Season(this.season.name, this.seasonNewName, this.seasonNewDesc, this.seasonNewYear, this.seasonNewSeason)
    this._siegeService.editSeason (this.seasonEdit)
    .subscribe(
      res => {
        this._seasonComp.refreshSeasons();
        console.log(res)},
      err => console.log(err)
    )}
    }

}
