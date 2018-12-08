import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../../siege.service';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  season = {}

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
  
    return this._siegeService.getSeasons()
    .subscribe(
      res => this.season = res,
      err => console.log(err)
    )
  }

}
