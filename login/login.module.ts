// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccessComponent } from './access/access.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


// @ts-ignore
@NgModule({
  declarations: [
    AccessComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    RegistroEmpleadoComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
