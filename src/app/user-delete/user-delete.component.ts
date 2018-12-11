import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { SiegeService } from '../siege.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  name: String
  password: String

  constructor(
    private _authGuard: AuthGuard,
    private _siegeService: SiegeService
  ) { }

  ngOnInit() {
    this._authGuard.canActivate();
  }

  deleteUser() {
    console.log(this.name)
    this._siegeService.deleteUser(this.name, this.password)
    .subscribe (
      res => console.log(res),
      err => console.log (err)
      
    )
  }

}
