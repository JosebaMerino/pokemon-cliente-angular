import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

const KEY_ISLOGGED = 'isLogged';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario;

  private storage: Storage;

  constructor() {
    this.usuario = undefined;
    console.trace('constructor UsuarioService');
    this.storage = window.sessionStorage;
  } // constructor

  estaLogeado(): boolean {
    return !!this.storage.getItem(KEY_ISLOGGED);
  }// estaLogeado

  login(nombre: string, password: string): Usuario {
    console.trace(`UsuarioService login, nombre ${nombre} password ${password}`);
    const NOMBRE = 'admin';
    const PASS = 'admin';

    let usuarioBuscar: Usuario; // si no entra en el if sera undefined

    console.debug('"%s" "%s" -- "%s" "%s"', NOMBRE, PASS, nombre, password);

    if (NOMBRE === nombre && PASS === password) {
      // Crear usuario y rellenar datos.
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;
      this.storage.setItem(KEY_ISLOGGED, JSON.stringify(usuarioBuscar)); // marcar que esta logeado
    } else {
      this.storage.removeItem(KEY_ISLOGGED); // marcar que no esta logeado
    }

    return usuarioBuscar;
  } // login

  cerrarSesion(idUsuario: number) {
    this.storage.removeItem(KEY_ISLOGGED);
  } // cerrarSesion
}
