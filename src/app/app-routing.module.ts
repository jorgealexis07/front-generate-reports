import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GruposComponent} from "./grupos/grupos.component";
import {CursosComponent} from "./cursos/cursos.component";
import {CalificacionesComponent} from "./calificaciones/calificaciones.component";
import {EncriptadoComponent} from "./encriptado/encriptado.component";
import {IntegrantesComponent} from "./integrantes/integrantes.component";

const routes: Routes = [
  {path: 'grupos', component: GruposComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'calificaciones', component: CalificacionesComponent},
  {path: 'encriptado', component: EncriptadoComponent},
  {path: 'integrantes', component: IntegrantesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
