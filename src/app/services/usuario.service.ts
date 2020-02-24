import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const KEY_ISLOGGED = 'isLogged';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario;

  private storage: Storage;

  constructor(private http: HttpClient) {
    this.usuario = undefined;
    console.trace('constructor UsuarioService');
    this.storage = window.sessionStorage;
  } // constructor

  estaLogeado(): boolean {
    return !!this.storage.getItem(KEY_ISLOGGED);
  }// estaLogeado

  login(nombre: string, password: string): Observable<any> {
    const url = 'http://localhost:8080/pokemon-rest/login';

    console.trace(`UsuarioService login, nombre ${nombre} password ${password}`);
    return this.http.post(url, { nombre, password });
  } // login

  cerrarSesion(idUsuario: number) {
    const url = 'http://localhost:8080/pokemon-rest/logout';

    this.storage.removeItem(KEY_ISLOGGED);

    this.http.get(url);
  } // cerrarSesion
}
