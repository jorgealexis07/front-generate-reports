import { Component, OnInit } from '@angular/core';
import {getSyntheticPropertyName} from '@angular/compiler/src/render3/util';
import { SEmpleadoService } from '../servicios/s-empleado.service';
import {Datosinterface} from '../../serviceDatEmp/obj-dat-emp.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any;
  constructor(public sEmpleadoService: SEmpleadoService) {  }
    /*constructor(public sEmpleadoService: SEmpleadoService) {  this.sEmpleadoService.getUsers().subscribe( data => {
      console.log(data); });*/
  ngOnInit(): void {
    this.sEmpleadoService.getUsers().subscribe(data => {
      console.log(data);
      this.empleados = data;
    });
  }
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
      docResult.save(`${new Date().toISOString()}_listEmpleados.pdf`);
    });
  }

}

