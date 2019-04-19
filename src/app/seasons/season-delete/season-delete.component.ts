import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { SiegeService } from 'src/app/siege.service';
import { SeasonsComponent } from '../seasons.component';
import { Character } from 'src/app/operators/operator.model';
import { World } from 'src/app/worlds/world.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-season-delete',
  templateUrl: './season-delete.component.html',
  styleUrls: ['./season-delete.component.css']
})
export class SeasonDeleteComponent implements OnInit {

  @Input() season : Season
  seasonToDelete: Season;
  private sub: any;

  constructor(
    private _siegeService : SiegeService,
    private route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this._siegeService.getSeasonById(params.id)
      .subscribe(
        res => {
          this.seasonToDelete = res;
          console.log("Mission Accomplished")
        },
        err => {
          console.log(err)
        }
      )
    })
  }

  delete() {
    this._siegeService.deleteSeason(this.seasonToDelete._id)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/operations'])
      },
      err => {
        console.log(err)
      }
    )
  }

  
   

}
