import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../../siege.service';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  operator = {}

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {

    return this._siegeService.getOperators()
    .subscribe(
      res => this.operator = res, 
      err => console.log(err)
    )
  }

}
