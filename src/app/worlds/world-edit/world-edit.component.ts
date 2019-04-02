import { Component, OnInit, Input } from '@angular/core';
import { World } from '../world.model';
import { Season } from '../../seasons/season.model';
import { SiegeService } from '../../siege.service';
import { AuthService } from 'src/app/auth.service';
import { OperatorsComponent } from 'src/app/operators/operators.component';
import { WorldsComponent } from '../worlds.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-world-edit',
  templateUrl: './world-edit.component.html',
  styleUrls: ['./world-edit.component.css']
})
export class WorldEditComponent implements OnInit {

  seasons = []
  @Input() world : World
  worldById : World
  private sub: any;
  
  worldEdit;
  newName = '';
  newWorldDesc = '';
  newWorldRanked = false;
  
  

  constructor(private route: ActivatedRoute, private _siegeService: SiegeService, private _authService : AuthService, private _worldsComp: WorldsComponent) { }

  ngOnInit() {
    // return this._siegeService.getSeasons()
    // .subscribe(
    //   res => this.seasons = res,
    //   err => console.log(err)
    // )
    this.sub = this.route.params.subscribe(params => {
      
      console.log(params['id']);
      return this._siegeService.getWorldById(params.id)
      .subscribe(
        res => {
          this.worldById = res
          console.log(this.worldById)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  editWorld() {
      if (this._authService.loggedIn) {
        this.worldEdit = new World(this.worldById._id, this.worldById.name, this.newName, this.newWorldDesc, this.newWorldRanked)
        this._siegeService.editWorld(this.worldEdit)
        .subscribe(
          res => {
            this._worldsComp.refreshWorlds();
            console.log(res)},
          err => console.log(err)
        )}
    }
  }
    



