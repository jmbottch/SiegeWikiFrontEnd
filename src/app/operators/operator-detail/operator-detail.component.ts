import { Component, OnInit, Input } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { Character } from '../operator.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  @Input() operator: Character

  constructor(private _siegeService: SiegeService, private _authService: AuthService) { }

  ngOnInit() {
  }
  // deleteOperator(): any {
  //   console.log(this.operator.name)
  //   err => console.log(err)
  //   return this._siegeService.deleteSeason(this.operator.name)
    
      
  //   }

}
