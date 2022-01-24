import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportesComponent} from './reportes/reportes.component';
import {Route, RouterModule} from '@angular/router';
import {EmpleadosComponent} from './reportes/empleados/empleados.component';
import {InvitadosComponent} from './reportes/invitados/invitados.component';
import {EntradasysalidasusuariosComponent} from './reportes/entradasysalidasusuarios/entradasysalidasusuarios.component';

const routes: Route[] = [
  { path: 'modrep', component: ReportesComponent },
  { path: 'mostrarempleados', component: EmpleadosComponent },
  { path: 'mostrarusrinvitados', component: InvitadosComponent },
  { path: 'mostrarhoraeys', component: EntradasysalidasusuariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
