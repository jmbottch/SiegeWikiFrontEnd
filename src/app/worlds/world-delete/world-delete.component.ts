import { Component, OnInit, Input } from '@angular/core';
import { World } from '../world.model';
import { SiegeService } from 'src/app/siege.service';
import { WorldsComponent } from '../worlds.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-world-delete',
  templateUrl: './world-delete.component.html',
  styleUrls: ['./world-delete.component.css']
})
export class WorldDeleteComponent implements OnInit {

  @Input() world : World
  worldToDelete: World;
  private sub: any;
  
  constructor(private _siegeService: SiegeService, private _worldsComp: WorldsComponent, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    this._siegeService.getWorldById(params.id)
      .subscribe(
        res => {
          this.worldToDelete = res
          //console.log(this.worldById)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  deleteWorld() {
    this._siegeService.deleteWorld(this.worldToDelete._id)
    .subscribe(
      res => {
        this._worldsComp.refreshWorlds();
        this._router.navigate(['/maps']);
        console.log(res)
      },
      err => console.log(err)
    )
      
    }

}
