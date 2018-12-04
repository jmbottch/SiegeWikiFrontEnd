import { Injectable } from '@angular/core';
import { Season } from './season.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
@Injectable(
)
export class SeasonService {

  private headers = new Headers({'Content-type' : 'application/json'});
  private serverUrl = environment.serverUrl + '/seasons';
  private seasons: Season[] = [];

  //
  constructor(private http : Http) {}
  //

  public getSeasons(): Promise<Season[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Season[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  //
  private handleError(error:any) : Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
}
