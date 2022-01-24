import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjDatEmpService {
/*informacion fake para prueba*/
  objDatEmp: Datosinterface [] = [
 {
   dni: 1,
   img: 'assets/user.png',
   name: 'Juan',
   ap: 'Perez',
   am: 'Rojas',
   H_E: '09:20 hrs',
   H_S: '17:00 hrs',
   Date: '27/10/2021',
 },
 {
   dni: 2,
   img: 'assets/user1.png',
   name: 'Noemi',
   ap: 'Perez',
   am: 'Rojas',
   H_E: '09:20 hrs',
   H_S: '17:00 hrs',
   Date: '27/10/2021',
 },
 {
   dni: 3,
   img: 'assets/user1.png',
   name: 'Denisse',
   ap: 'Arteaga',
   am: 'Romero',
   H_E: '09:20 hrs',
   H_S: '17:00 hrs',
   Date: '28/10/2021',
 },
 {
   dni: 4,
   img: 'assets/user.png',
   name: 'Carlos',
   ap: 'Ortega',
   am: 'Fuentes',
   H_E: '09:20 hrs',
   H_S: '17:00 hrs',
   Date: '28/10/2021',
 },
 {
   dni: 5,
   img: 'assets/user1.png',
   name: 'Michel',
   ap: 'Sosa',
   am: 'Fuentes',
   H_E: '09:20 hrs',
   H_S: '17:00 hrs',
   Date: '28/10/2021',
 },
 {
   dni: 6,
   img: 'assets/user.png',
   name: 'Alan',
   ap: 'Diaz',
   am: 'Cortes',
   H_E: '09:00 hrs',
   H_S: '17:00 hrs',
   Date: '28/10/2021',
 },
];
  constructor() {  }
  recupera_obj_demp(): Datosinterface[]
  {
    return this.objDatEmp;
  }
}

export interface Datosinterface {
  dni: number;
  img: string;
  name: string;
  ap: string;
  am: string;
  H_E: string;
  H_S: string;
  Date: string;
}



