import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Season } from '../season.model';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  @Input() season: Season;

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
  }

}
