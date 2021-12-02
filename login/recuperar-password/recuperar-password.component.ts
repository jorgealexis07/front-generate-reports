import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {

  Formulario4 = new FormGroup(
    {

      correo: new FormControl('',[Validators.required, Validators.email]),
    }
  );

  constructor() { }

  get correo():any{
    return this.Formulario4.get('correo');
  }
  ngOnInit(): void {
  }

}
