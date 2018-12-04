import { Component, OnInit } from '@angular/core';
import { World } from '../world.model';

@Component({
  selector: 'app-world-list',
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css']
})
export class WorldListComponent implements OnInit {

  worlds: World[] = [
    new World('Test world 1', 'First Angular Test world', true),
    new World('Test world 2', 'Second Angular Test world', false),
    new World('Test world 3', 'Third Angular Test world', false),
    new World('Test world 4', 'Fourth Angular Test world', true),
    new World('Test world 5', 'Fifth Angular Test world', false),
    new World('Test world 6', 'Sixth Angular Test world', true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
