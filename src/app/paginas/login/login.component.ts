import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';

const KEY_ISLOGGED = 'isLogged';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  private storage: Storage;


  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private builder: FormBuilder
              ) {
                this.storage = window.sessionStorage;
  } // constructor

  ngOnInit() {
    this.formulario = this.builder.group({
      username: [''],
      password: ['']
    });
  } // ngOnInit

  enviar( values) {


    this.usuarioService.login(values.username, values.password).subscribe(
      () => {
          const usuarioBuscar = new Usuario();
          usuarioBuscar.nombre = values.username;
          usuarioBuscar.password = values.password;
          usuarioBuscar.id = 99;
          this.storage.setItem(KEY_ISLOGGED, JSON.stringify(usuarioBuscar)); // marcar que esta logeado
          this.router.navigate(['/backoffice']);
      },
      (error) => {
        console.trace('No se ha podido logear');
      }
    );
  }// login

}
