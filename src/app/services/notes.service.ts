import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'http://kcpelevennoteapie.azurewebsites.net/api';

@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    return this._http.get(`${Api_Url}/Notes` , { headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
