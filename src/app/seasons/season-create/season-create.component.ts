import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { SiegeService } from '../../siege.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css']
})
export class SeasonCreateComponent implements OnInit {

  title = 'Create Season';
  
  seasonCreate = {
    name:String,
    description: String,
    year: Number,
    sesason: Number
  }
  

  constructor(private _siegeService:SiegeService)  { }

  

   addSeason() {
     this._siegeService.addSeason(this.seasonCreate)
      .subscribe(
        res => {
          console.log(res) 
        },
        err => {
          console.log(err)
        }
      )
   }

  ngOnInit() {
  }

}
