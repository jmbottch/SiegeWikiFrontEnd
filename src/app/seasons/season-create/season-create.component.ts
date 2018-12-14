import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { SiegeService } from '../../siege.service';
import { HttpErrorResponse } from '@angular/common/http';
import { World } from 'src/app/worlds/world.model';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css']
})
export class SeasonCreateComponent implements OnInit {

  title = 'Create Season';


  seasonCreate = {
    name: String,
    description: String,
    year: Number,
    season: Number

  }
  displayresult? = {};
  displayresults = [];



  showResultBox;


  constructor(private _siegeService: SiegeService, private _router: Router) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  addSeason() {
    this._siegeService.addSeason(this.seasonCreate)
      .subscribe(
        res => {
          this._router.navigate(['/operations'])
          console.log(res)
          this.displayresult = {
            result: "success",
            message: "Season was created succesfully"
          };
          this.showResult();
        },
        err => {
          console.log(err);
          this.displayresults = [

          this.displayresult = {

              result: "Failed",
              message:
                JSON.stringify(err.error.err.errors.name.message)


          },

        //   this.displayresult = {

        //     result: "Failed",
        //     message:
        //       JSON.stringify(err.error.err.errors.description.message)


        // }

          ];



            
          this.showResult();
        }
      )
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }


}
