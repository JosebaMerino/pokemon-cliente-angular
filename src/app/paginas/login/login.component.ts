import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private builder: FormBuilder
              ) {

  } // constructor

  ngOnInit() {
    this.formulario = this.builder.group({
      username: [''],
      password: ['']
    });
  } // ngOnInit

  enviar( values) {


    this.usuarioService.login(values.username, values.password);

    this.router.navigate(['/backoffice']);
  }// login

}
