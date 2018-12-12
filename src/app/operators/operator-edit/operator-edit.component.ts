import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../operator.model';
import { Season } from '../../seasons/season.model';
import { SiegeService } from '../../siege.service';
import { AuthService } from 'src/app/auth.service';
import { OperatorsComponent } from '../operators.component';

@Component({
  selector: 'app-operator-edit',
  templateUrl: './operator-edit.component.html',
  styleUrls: ['./operator-edit.component.css']
})
export class OperatorEditComponent implements OnInit {

  seasons = [];

  @Input() operator: Character;
  operatorEdit;
  newOperatorName = '';
  newOperatorDesc = '';
  newOperatorSide = '';


  // operator = {

  //   name: String,
  //   description: String,
  //   side: String,
  //   operator: Character
    
  // }

  constructor(private _siegeService: SiegeService, private _authService : AuthService, private _operatorComp : OperatorsComponent) { }

  ngOnInit() {
    return this._siegeService.getSeasons()
    .subscribe(
      res => this.seasons = res,
      err => console.log(err)
    )
  }

  editOperator() {
    if (this._authService.loggedIn) {
    this.operatorEdit = new Character(this.operator.name, this.newOperatorName, this.newOperatorDesc, this.newOperatorSide)
    this._siegeService.editOperator(this.operatorEdit)
    .subscribe(
      res => {
        this._operatorComp.refreshOperators();
        console.log(res)},
      err => console.log(err)
    )}
    }

}
