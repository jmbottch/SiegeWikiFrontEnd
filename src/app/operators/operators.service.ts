import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Operator } from 'rxjs';
import { Character } from './operator.model';
import { Http, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  private headers = new Headers({'Content-type' : 'application/json'});
  private serverUrl = environment.serverUrl + '/operators';
  private operators: Character[] = [];

  //
  constructor(private http : Http) {}
  //

  public getWorlds(): Promise<Character[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Character[];
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
