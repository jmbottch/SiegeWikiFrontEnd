import { Component, OnInit, Input } from '@angular/core';
import { World } from '../world.model';
import { Season } from '../../seasons/season.model';
import { SiegeService } from '../../siege.service';

@Component({
  selector: 'app-world-edit',
  templateUrl: './world-edit.component.html',
  styleUrls: ['./world-edit.component.css']
})
export class WorldEditComponent implements OnInit {

  seasons = []
  @Input() world : World
  
  
  worldEditForm = {

    name: String,
    description: String,
    season: Season,
    availableInRanked: Boolean
    
  }

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
    return this._siegeService.getSeasons()
    .subscribe(
      res => this.seasons = res,
      err => console.log(err)
    )
  }

}
