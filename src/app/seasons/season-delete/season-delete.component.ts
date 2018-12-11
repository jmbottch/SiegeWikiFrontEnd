import { Component, OnInit } from '@angular/core';
import { Season } from '../season.model';
import { SiegeService } from 'src/app/siege.service';
import { SeasonsComponent } from '../seasons.component';
import { Character } from 'src/app/operators/operator.model';
import { World } from 'src/app/worlds/world.model';

@Component({
  selector: 'app-season-delete',
  templateUrl: './season-delete.component.html',
  styleUrls: ['./season-delete.component.css']
})
export class SeasonDeleteComponent implements OnInit {

  

  constructor(private _siegeService : SiegeService) { }

  ngOnInit() {
  }

  
   

}
