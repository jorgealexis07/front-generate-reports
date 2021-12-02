import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.scss']
})

export class RegistroEmpleadoComponent implements OnInit {
  Formulario2 = new FormGroup(
    {

      correo: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('([A-Z]+[0-9])')
        ]),
    }
  );


  constructor() {
  }


  get correo():any{
    return this.Formulario2.get('correo');
  }
  get password():any{
    return this.Formulario2.get('password');
  }


  ngOnInit() {
  }

}
