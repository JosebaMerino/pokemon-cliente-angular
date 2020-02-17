import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  estaLogeado() {
    return true;
  }

  cerrarSesion(id: number) {
    return true;
  }
}
