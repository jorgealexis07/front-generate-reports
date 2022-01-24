import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReportesComponent } from './reportes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import {RouterModule} from '@angular/router';
import { InvitadosComponent } from './invitados/invitados.component';
import { EntradasysalidasusuariosComponent } from './entradasysalidasusuarios/entradasysalidasusuarios.component';


@NgModule({
  declarations: [ReportesComponent, EmpleadosComponent, InvitadosComponent, EntradasysalidasusuariosComponent],
  exports: [
    ReportesComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ReportesModule { }
