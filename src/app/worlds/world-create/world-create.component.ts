import { Component, OnInit } from '@angular/core';
import { World } from '../world.model';
import { SiegeService } from '../../siege.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Season } from 'src/app/seasons/season.model';

@Component({
  selector: 'app-world-create',
  templateUrl: './world-create.component.html',
  styleUrls: ['./world-create.component.css']
})
export class WorldCreateComponent implements OnInit {

  worldCreateFrom = new FormGroup ({

    name: new FormControl(''),
    description: new FormControl(''),
    
  })

  constructor() { }

  ngOnInit() {
  }

}
