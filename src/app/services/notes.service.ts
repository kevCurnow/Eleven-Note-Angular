import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';


const Api_Url = 'http://kcpelevennoteapie.azurewebsites.net/api';

@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    return this._http.get(`${Api_Url}/Notes` , { headers: this.getHeaders()});
  }

  createNotes(note: Note){
    return this._http.post(`${Api_Url}/Notes`, note, { headers: this.getHeaders()});
  }

  getNote(id: string){
    return this._http.get(`${Api_Url}/Notes/${id}`, {headers: this.getHeaders()});
  }
  
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
