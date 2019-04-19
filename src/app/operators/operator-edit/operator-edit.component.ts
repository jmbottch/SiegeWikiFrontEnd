import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../operator.model';
import { Season } from '../../seasons/season.model';
import { SiegeService } from '../../siege.service';
import { AuthService } from 'src/app/auth.service';
import { OperatorsComponent } from '../operators.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-operator-edit',
  templateUrl: './operator-edit.component.html',
  styleUrls: ['./operator-edit.component.css']
})
export class OperatorEditComponent implements OnInit {

  

  @Input() operator: Character;

  operatorById: Character;
  private sub: any;
  operatorData: FormGroup;
  seasons = [];

  // operatorEdit;
  // newOperatorName = '';
  // newOperatorDesc = '';
  // newOperatorSide = '';


  // operator = {

  //   name: String,
  //   description: String,
  //   side: String,
  //   operator: Character

  // }

  constructor(
    private _siegeService: SiegeService, 
    private _authService: AuthService, 
    private _operatorComp: OperatorsComponent, 
    private _router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this._siegeService.getOperatorById(params.id)
      .subscribe(
        res => {
          this.operatorById = res
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
     return this.operatorData = this.fb.group({
      name:[''],
      description:[''],
      side:['']
     })
    })
  }

  editOperator() {
    if (this._authService.loggedIn) {
      console.log(this.operatorData.value)
      this._siegeService.editOperator(this.operatorById._id, this.operatorData.value)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/operators'])
        },
        err => {
          console.log(err)
        }
      )
    }
  }

}
