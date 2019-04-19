import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../operator.model';
import { SiegeService } from 'src/app/siege.service';

@Component({
  selector: 'app-operator-delete',
  templateUrl: './operator-delete.component.html',
  styleUrls: ['./operator-delete.component.css']
})
export class OperatorDeleteComponent implements OnInit {

  @Input() operator: Character;

  operatorById: Character;
  private sub: any;
  
  constructor(
    private route : ActivatedRoute,
    private _siegeService : SiegeService,
    private _router : Router

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
    })
  }

  deleteOperator() {
    this._siegeService.deleteOperator(this.operatorById._id)
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
