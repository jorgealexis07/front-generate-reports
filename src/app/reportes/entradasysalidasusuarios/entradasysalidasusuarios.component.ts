import { Component, OnInit } from '@angular/core';
import {Datosinterface, ObjDatEmpService} from '../../serviceDatEmp/obj-dat-emp.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-entradasysalidasusuarios',
  templateUrl: './entradasysalidasusuarios.component.html',
  styleUrls: ['./entradasysalidasusuarios.component.css']
})
export class EntradasysalidasusuariosComponent{
  constructor(private objdpservicio: ObjDatEmpService) {
    this.objDatEm = objdpservicio.recupera_obj_demp();
  }
  /*informacion fake para prueba*/
  /*   DATOS_EMPLEADOS = [
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
     ];*/
  objDatEm: Datosinterface [] = [];
  // tslint:disable-next-line:typedef
  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 25;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }
}
