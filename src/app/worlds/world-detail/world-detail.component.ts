import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { World } from '../world.model';

@Component({
  selector: 'app-world-detail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})
export class WorldDetailComponent implements OnInit {

  @Input() world : World

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
  }

}
