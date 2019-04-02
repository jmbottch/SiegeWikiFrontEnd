import { Component, OnInit, Input } from '@angular/core';
import { Operator } from 'semver';
import { ActivatedRoute } from '@angular/router';
import { SiegeService } from 'src/app/siege.service';

@Component({
  selector: 'app-operator-with-id',
  templateUrl: './operator-with-id.component.html',
  styleUrls: ['./operator-with-id.component.css']
})
export class OperatorWithIdComponent implements OnInit {

  @Input() operator: Operator
  operatorById : Operator;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _siegeService: SiegeService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      return this._siegeService.getOperatorById(params.id)
      .subscribe(
        res => {
          this.operatorById = res;
          console.log('res: ' + res)
        },
        err => {
          console.log(err)
        }
      )
    })
  }

}
