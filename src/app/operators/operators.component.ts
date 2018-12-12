import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../siege.service';
import { Character } from './operator.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  operators = []
  selectedOperator: Character;

  constructor(private _siegeService: SiegeService, private _authService: AuthService) { }

  ngOnInit() {
    return this._siegeService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    )
  }

  onSelect(operator:Character) : void {
    this.selectedOperator = operator
  }

  refreshOperators() {
    return this._siegeService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    )
  }
}
