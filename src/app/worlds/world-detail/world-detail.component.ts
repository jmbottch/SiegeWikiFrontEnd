import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { World } from '../world.model';

@Component({
  selector: 'app-world-detail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})
export class WorldDetailComponent implements OnInit {

  world = {}

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
    return this._siegeService.getWorlds()
    .subscribe(
      res => this.world = res,
      err => console.log(err)
    )
  }

}
