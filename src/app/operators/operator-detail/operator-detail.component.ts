import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Character } from '../operator.model';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  @Input() operator: Character

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
  }

}
