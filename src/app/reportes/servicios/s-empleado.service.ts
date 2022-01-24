import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SEmpleadoService {
  constructor(private http: HttpClient) { console.log('Servicio Persona'); }
  // tslint:disable-next-line:typedef
  getUsers() { const header = new HttpHeaders().set('Type-content', 'aplication/json');
               return this.http.get('http://localhost:4000/api/creaempleado', { headers: header});
}
  /*// tslint:disable-next-line:typedef
  getUsers() {
    this.http.get('http://localhost:4000/api/creaempleado/').subscribe(data => {
      console.log(data);
    });
    console.log( 'Esto se ejecutará antes que el console log de arriba' );
  }*/
  /*recupera_obj_demp(): Datosinterface[]
  {
    return this.getUsers();
  }
}

export interface Datosinterface {
  DNI_EMPLEADO: any;
  NOMBRE_EMPLEADO: any;
  AP_PATERNO: any;
  AP_MATERNO: any;
  TELEFONO: any;
  EDAD: any;
  PUESTO: any;*/

}

