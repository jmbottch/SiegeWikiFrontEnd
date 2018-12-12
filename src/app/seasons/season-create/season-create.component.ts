import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { SiegeService } from '../../siege.service';
import { HttpErrorResponse } from '@angular/common/http';
import { World } from 'src/app/worlds/world.model';
import { Router } from '@angular/router';

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
    season: Number
    
  }
  

  constructor(private _siegeService:SiegeService, private _router: Router)  { }

  ngOnInit() {
  }

  addSeason() {
    this._siegeService.addSeason(this.seasonCreate)
     .subscribe(
       res => {
         this._router.navigate(['/operations'])
         console.log(res) 
       },
       err => {
         console.log(err)
       }
     )
  }

}
