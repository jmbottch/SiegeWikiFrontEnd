import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Season } from './seasons/season.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SiegeService {
  private seasons: Season[] = [];
  private season: Season;
  private headers = new Headers({ 'Content-Type': 'applicaiton/json' });

  seasonsChanged = new Subject<Season[]>();
  //ListURLs
  private _worldsUrl = environment.serverUrl + "/api/worlds/";
  private _operatorsUrl = environment.serverUrl + "/api/operators/";
  private _seasonsUrl = environment.serverUrl + "/api/seasons/";
  private _userUrl = environment.serverUrl + "/api/users/"

  //Detail URLs
  private _worldUrl = "https://siegewiki.herokuapp.com/api/world/";
  private _operatorUrl = "https://siegewiki.herokuapp.com/api/operator/";
  private _seasonUrl = "https://siegewiki.herokuapp.com/api/season/";



  constructor(private http: HttpClient) { }

  //WORLDS API CALLS
  getWorlds() {
    return this.http.get<any>(this._worldsUrl)
  }

  getWorldById( _id:any) {
    console.log(this._worldUrl + '' + _id)
    return this.http.get<any>(this._worldUrl + '' + _id)
    }

  addWorld(world) {
    return this.http.post<any>(this._worldsUrl, world)
  }

  editWorld(world: {}) {
    console.log('ewaja' + world)
    return this.http.put<any>(this._worldsUrl, world);
  }
  
  deleteWorld(name: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'name': name
        })
      };
    return this.http.delete<any>(this._worldsUrl, httpOptions );
    }

  //OPERATORS API CALLS
  getOperators() {
    return this.http.get<any>(this._operatorsUrl)
  }
  getOperatorById(_id: any) {
    return this.http.get<any>(this._operatorUrl + '' + _id);
}
  addOperator(operator) {
    return this.http.post<any>(this._operatorsUrl, operator)
  }

  editOperator(operator: {}) {
    console.log('ewaja' + operator)
    return this.http.put<any>(this._operatorsUrl, operator);
  }

  deleteOperator(name: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'name': name
        })
      };
    return this.http.delete<any>(this._operatorsUrl, httpOptions );
    }

  //SEASONS API CALLS
  getSeasons() {
    return this.http.get<any>(this._seasonsUrl)
  }

  getSeasonById(_id: any) {
    return this.http.get<any>(this._seasonUrl + '' + _id)
  }

  addSeason(season) {
    return this.http.post<any>(this._seasonsUrl, season)
  }

  editSeason(season: {}) {
    console.log('ewaja' + season)
    return this.http.put<any>(this._seasonsUrl, season);
  }

  populateSeason(season: any) {
    console.log(season)
    return this.http.put<any>(this._seasonsUrl + 'populate/', season);
}

  deleteSeason(name: any) {
    console.log(name)
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'name': name
        })
      };
    return this.http.delete<any>(this._seasonsUrl, httpOptions );
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
