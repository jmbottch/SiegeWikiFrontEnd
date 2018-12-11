import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Character } from '../operator.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  operatorCreateForm = {
    name: String,
    description: String,
    side: String
  }

  constructor(private _siegeService : SiegeService, private _router: Router) { }

  ngOnInit() {
  }

  addOperator() {
    this._siegeService.addOperator(this.operatorCreateForm)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if( err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
