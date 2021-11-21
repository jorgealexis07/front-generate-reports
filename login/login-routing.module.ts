import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./registro/registro.component";
import {RecuperarPasswordComponent} from "./recuperar-password/recuperar-password.component";
import {AccessComponent} from "./access/access.component";

const routes: Routes = [
  {
    path:'',
    children :[
      {path:'registro', component :RegistroComponent },
      {path:'recupera-password', component :RecuperarPasswordComponent },
      {path:'access', component :AccessComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
