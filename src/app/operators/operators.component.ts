import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../siege.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  operators = [];

  constructor(private _siegeService: SiegeService) { }

  ngOnInit() {
    return this._siegeService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    )
  }

}
