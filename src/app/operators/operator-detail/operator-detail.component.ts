import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Character } from '../operator.model';
import { AuthService } from 'src/app/auth.service';
import { OperatorsComponent } from '../operators.component';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  @Input() operator: Character
  selectedOperator: Character;

  constructor(private _siegeService: SiegeService, private _authService: AuthService, private _operatorComp : OperatorsComponent) { }

  ngOnInit() {
  }

  onSelect(operator:Character) : void {
    this.selectedOperator = operator
  }

  deleteOperator() {
    this._siegeService.deleteOperator(this.operator.name)
    .subscribe(
      res => {
        this._operatorComp.refreshOperators();
        console.log(res)
      },
      err => console.log(err)
    )
      
    }

}
