import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Season } from './seasons/season.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SiegeService {

  //ListURLs
private _worldsUrl = "http://siegewiki.herokuapp.com/api/worlds";
private _operatorsUrl = "http://siegewiki.herokuapp.com/api/operators";
private _seasonsUrl = "http://siegewiki.herokuapp.com/api/seasons";

//Detail URLs
private _worlUrl = "http://siegewiki.herokuapp.com/api/world";
private _operatorUrl = "http://siegewiki.herokuapp.com/api/operator";
private _seasonUrl = "http://siegewiki.herokuapp.com/api/season";



  constructor(private http: HttpClient) { }

  getWorlds() {
    return this.http.get<any>(this._worldsUrl)
  }

  getOperators() {
    return this.http.get<any>(this._operatorsUrl)
  }

  //SEASON API CALLS
  getSeasons() {
    return this.http.get<any>(this._seasonsUrl)
  }

  addSeason(name, description, year, season) {
    const uri = 'http://siegewiki.herokuapp.com/api/season';
    const obj = {
      name: name,
      description: description,
      year: year,
      season: season
    };
    this.http.post(uri, obj)
    .subscribe(res => console.log('Done'));

  }
}
