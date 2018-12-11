import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { Character } from '../../operators/operator.model';
import { SiegeService } from '../../siege.service';
import { World } from 'src/app/worlds/world.model';

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
  

  seasonEditForm = {
      name: String,
      description: String,
      year: Number,
      season: Number,
      operator: Character,
      world: World
      
      
    
  }

  constructor(private _siegeService: SiegeService) { }

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

}
