import { Component, OnInit } from '@angular/core';
import { Character } from '../operator.model';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {
  operators: Character[] = [
    new Character('Test character 1', 'First Angular Test character', 'Attacker'),
    new Character('Test character 2', 'Second Angular Test character', 'Defender'),
    new Character('Test character 3', 'Third Angular Test character', 'Attacker'),
    new Character('Test character 4', 'Fourth Angular Test character', 'Defender'),
    new Character('Test character 5', 'Fifth Angular Test character', 'Attacker'),
    new Character('Test character 6', 'Sixth Angular Test character', 'Defender')
  ];

  constructor() { }

  ngOnInit() {
  }

}
