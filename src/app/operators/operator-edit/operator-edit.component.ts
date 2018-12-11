import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../operator.model';
import { Season } from '../../seasons/season.model';
import { SiegeService } from '../../siege.service';

@Component({
  selector: 'app-operator-edit',
  templateUrl: './operator-edit.component.html',
  styleUrls: ['./operator-edit.component.css']
})
export class OperatorEditComponent implements OnInit {

  seasons = [];

  operator = {

    name: String,
    description: String,
    side: String,
    operator: Character
    
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
