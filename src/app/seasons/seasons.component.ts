import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../siege.service';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  
  seasons = []
  
  constructor (private _siegeService: SiegeService) {}
  ngOnInit() {
    return this._siegeService.getSeasons()
    .subscribe(
      res => this.seasons = res,
      err => console.log(err)
    )
  }

}
