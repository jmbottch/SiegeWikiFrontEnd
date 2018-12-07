import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../siege.service';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {

  worlds = []
  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {

    this._siegeService.getWorlds()
    .subscribe(
      res => this.worlds = res,
      err => console.log
    )
  }

}
