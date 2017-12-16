import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http/src/client';

const Api_Url = 'http://kcpelevennoteapie.azurewebsites.net';

@Injectable()
export class AuthService {

  constructor( private _http: HttpClient) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/api/Register`, regUserData);
  }
}
