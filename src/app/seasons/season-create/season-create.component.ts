import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { SiegeService } from '../../siege.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css']
})
export class SeasonCreateComponent implements OnInit {

  title = 'Create Season';
  seasonCreateForm = new FormGroup ({

    name : new FormControl(''),
    description : new FormControl(''),
    year: new FormControl(''),
    season: new FormControl('')

  });
  

  constructor(private _siegeService:SiegeService, private fb: FormBuilder)  {

    this.createForm();
   }

   createForm() {
     this.seasonCreateForm = this.fb.group(this.seasonCreateForm);
   }

   addSeason(name, description, year, season) {
     this._siegeService.addSeason(name, description, year, season);
   }

  ngOnInit() {
  }

}
