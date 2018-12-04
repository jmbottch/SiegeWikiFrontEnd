import { Injectable } from '@angular/core';
import { World } from './world.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
@Injectable(
)
export class WorldsService {

  private headers = new Headers({'Content-type' : 'application/json'});
  private serverUrl = environment.serverUrl + '/worlds';
  private worlds: World[] = [];

  //
  constructor(private http : Http) {}
  //

  public getWorlds(): Promise<World[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as World[];
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
