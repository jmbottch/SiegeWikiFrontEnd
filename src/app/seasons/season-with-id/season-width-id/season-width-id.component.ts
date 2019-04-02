import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../season.model';
import { SiegeService } from 'src/app/siege.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SeasonsComponent } from '../../seasons.component';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-season-width-id',
  templateUrl: './season-width-id.component.html',
  styleUrls: ['./season-width-id.component.css']
})
export class SeasonWidthIdComponent implements OnInit {

  @Input() season : Season;
  seasonById : Season;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _siegeService : SiegeService
    ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log("Id before return: " + params['id']);
      return this._siegeService.getSeasonById(params.id)
      .subscribe(
        res => {
          this.seasonById = res;
          console.log('res: ' + res);
        },
        err => {
          console.log(err)
        }
      )
    })
  }
}
  