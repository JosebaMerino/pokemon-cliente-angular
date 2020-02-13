import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isNavbarCollapsed: boolean;
  numero: number;
  rutas: Array<any>;

  isLogged: boolean;

  constructor(public usuarioService: UsuarioService, private router: Router) {
    console.trace('NavbarComponent constructor');
    this.rutas = RUTAS;
    this.isNavbarCollapsed = true;
    this.numero = 0;

    this.isLogged = false;
  }// constructor

  ngOnInit() {
    //this.isLogged = this.usuarioService.estaLogeado();

    // Cada vez que cambia la URL actualiza la session (solucion no muy buena)
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isLogged = this.usuarioService.estaLogeado();
      }

    });
  }

  alternarOculto() {
    if(this.isNavbarCollapsed) {
      this.isNavbarCollapsed = false;
      this.empezarMostrar();
    } else {
      this.empezarOcultar();
    }
  }

  empezarMostrar(){
    if(this.numero < this.rutas.length - 1 ){
      this.numero ++;
      setTimeout(() => { this.empezarMostrar() }, TIME_SHOW);
    } else {
      this.numero++;
    }
  }

  empezarOcultar(){
    if(this.numero > 1){
      this.numero --;
      setTimeout(() => { this.empezarOcultar() }, TIME_SHOW);
    } else {
      this.numero--;
      this.isNavbarCollapsed = true;
    }
  }

  salir() {
    console.trace('NavbarComponent click boton cerrar sesion');

    const mensaje = '¿Estas seguro de que quieres salir?';
    if(confirm(mensaje)){
      this.usuarioService.cerrarSesion(99);
      this.router.navigate(['login']);
    }
  }
}
