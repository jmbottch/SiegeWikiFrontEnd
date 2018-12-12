import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { World } from '../world.model';
import { AuthService } from '../../auth.service';
import { OperatorsComponent } from 'src/app/operators/operators.component';
import { WorldsComponent } from '../worlds.component';
@Component({
  selector: 'app-world-detail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})
export class WorldDetailComponent implements OnInit {

  @Input() world : World
  selectedWorld : World

  constructor(private _siegeService: SiegeService, private _authService : AuthService, private _worldsComp : WorldsComponent) { }

  ngOnInit() {
  }
  
  onSelect(world:World) : void {
    this.selectedWorld = world
  }

  deleteWorld() {
    this._siegeService.deleteWorld(this.world.name)
    .subscribe(
      res => {
        this._worldsComp.refreshWorlds();
        console.log(res)
      },
      err => console.log(err)
    )
      
    }

}
