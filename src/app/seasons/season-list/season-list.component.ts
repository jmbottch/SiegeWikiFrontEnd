import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Season } from '../season.model';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {

  seasons: Season[] = [
    new Season('Test season 1', 'First Angular Test Season', 1),
    new Season('Test season 2', 'Second Angular Test Season', 2),
    new Season('Test season 3', 'Third Angular Test Season', 3),
    new Season('Test season 4', 'Fourth Angular Test Season', 2),
    new Season('Test season 5', 'Fifth Angular Test Season', 3),
    new Season('Test season 6', 'Sixth Angular Test Season', 1)
  ];
  constructor() { }
  
  ngOnInit () {

  }
  
  
}

