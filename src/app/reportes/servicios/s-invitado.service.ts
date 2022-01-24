import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SInvitadoService {
  constructor(private http: HttpClient) { console.log('Servicio Invitados'); }
  // tslint:disable-next-line:typedef
  getUsers() { const header = new HttpHeaders().set('Type-content', 'aplication/json');
               return this.http.get('http://localhost:4000/api/creainvitado', { headers: header});
  }
}
