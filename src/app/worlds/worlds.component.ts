import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../siege.service';
import { HttpErrorResponse } from '@angular/common/http';
import { World } from './world.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {

  worlds = []
  selectedWorld : World;
  constructor(private _siegeService: SiegeService, private _authService : AuthService) { }

  ngOnInit() {

    this._siegeService.getWorlds()
    .subscribe(
      res => this.worlds = res,
      err => console.log
    )
  }

  onSelect(world: World): void {
    this.selectedWorld = world;
  }

  refreshWorlds() {
    return this._siegeService.getWorlds()
    .subscribe(
      res => this.worlds = res,
      err => console.log(err)
    )
  }

}
