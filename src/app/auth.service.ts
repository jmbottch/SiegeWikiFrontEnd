import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _registerUrl = "http://siegewiki.herokuapp.com/api/user/register"
  private _loginUrl = "http://siegewiki.herokuapp.com/api/user/login";
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
}
