import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegistroComponent} from "./login/registro/registro.component";
import {RecuperarPasswordComponent} from "./login/recuperar-password/recuperar-password.component";
import {AccessComponent} from "./login/access/access.component";
import {RegistroEmpleadoComponent} from "./login/registro-empleado/registro-empleado.component";
import {DatospersonalesComponent} from "./datospersonales/datospersonales.component";
const routes: Routes = [
  {
    path:'recupera-password', component: RecuperarPasswordComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule )
  },
  {
    path:'access', component: AccessComponent ,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule )
  },
  {
    path:'registro', component: RegistroComponent ,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule )
  },
  {
    path:'DP', component: DatospersonalesComponent ,
    loadChildren: () => import('./datospersonales/datospersonales.module').then(m => m.DatospersonalesModule )
  },
  {
    path:'registro-empleado', component: RegistroEmpleadoComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
