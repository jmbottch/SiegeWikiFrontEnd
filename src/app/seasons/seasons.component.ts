import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../siege.service';
import { Season } from './season.model';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  
  seasons = []
  selectedSeason: Season;
  
  constructor (private _siegeService: SiegeService) {}
  ngOnInit() {
    return this._siegeService.getSeasons()
    .subscribe(
      res => this.seasons = res,
      err => console.log(err)
    )
  }

  onSelect(season:Season) : void {
    this.selectedSeason = season;
  }

}
