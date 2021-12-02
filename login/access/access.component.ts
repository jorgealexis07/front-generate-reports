import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  Formulario3 = new FormGroup(
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


  constructor() { }

  get correo():any{
    return this.Formulario3.get('correo');
  }
  get password():any{
    return this.Formulario3.get('password');
  }

  ngOnInit(): void {
  }

}
