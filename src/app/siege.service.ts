import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Season } from './seasons/season.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SiegeService {
  private seasons: Season[] = [];
  private season: Season;
  private headers = new Headers({ 'Content-Type': 'applicaiton/json' });

  seasonsChanged = new Subject<Season[]>();
  //ListURLs
  private _worldsUrl = "http://siegewiki.herokuapp.com/api/worlds/";
  private _operatorsUrl = "http://siegewiki.herokuapp.com/api/operators/";
  private _seasonsUrl = "http://siegewiki.herokuapp.com/api/seasons/";
  private _userUrl = "http://siegewiki.herokuapp.com/api/users/"

  //Detail URLs
  // private _worldUrl = "http://siegewiki.herokuapp.com/api/world";
  // private _operatorUrl = "http://siegewiki.herokuapp.com/api/operator";
  // private _seasonUrl = "http://siegewiki.herokuapp.com/api/season";



  constructor(private http: HttpClient) { }

  //WORLDS API CALLS
  getWorlds() {
    return this.http.get<any>(this._worldsUrl)
  }

  addWorld(world) {
    return this.http.post<any>(this._worldsUrl, world)
  }
  deleteWorld(name) {
    console.log(name);
    this.http.delete<any>(this._worldsUrl, name)
    
    
  }

  //OPERATORS API CALLS
  getOperators() {
    return this.http.get<any>(this._operatorsUrl)
  }
  addOperator(operator) {
    return this.http.post<any>(this._operatorsUrl, operator)
  }
  deleteOperator(name) {
    console.log(name);
    this.http.delete<any>(this._operatorsUrl, name)
    
    
  }

  //SEASONS API CALLS
  getSeasons() {
    return this.http.get<any>(this._seasonsUrl)
  }

  addSeason(season) {
    return this.http.post<any>(this._seasonsUrl, season)
  }

  deleteSeason(name, desc, year, seas, oper, world) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'name': name,
        'description': desc,
        'year' : year,
        'season' : seas,
        'operator' : oper,
        'world' : world
      })
    }
    return this.http.delete<any>(this._userUrl, httpOptions );
  }

  //USER DELETE
  deleteUser(name, pass) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type':  'application/json',
        'name': name,
        'password': pass
      })
    }
    return this.http.delete<any>(this._userUrl, httpOptions );
  }
}
