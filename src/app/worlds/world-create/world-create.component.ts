import { Component, OnInit } from '@angular/core';
import { SiegeService } from '../../siege.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { World } from '../world.model';

@Component({
  selector: 'app-world-create',
  templateUrl: './world-create.component.html',
  styleUrls: ['./world-create.component.css']
})
export class WorldCreateComponent implements OnInit {

  worldCreateForm = {
    
    name: String,
    description: String,
    availableInRanked: Boolean
  }

  constructor(private _siegeService : SiegeService) { }

  ngOnInit() {
  }

  addWorld() {
    this._siegeService.addWorld(this.worldCreateForm)
     .subscribe(
       res => {
         console.log(res) 
       },
       err => {
         console.log(err)
       }
     )
  }

}
