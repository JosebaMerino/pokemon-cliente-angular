import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lista: Array<Pokemon>;

  constructor() {
    console.trace('PrincipalComponent constructor');

    this.lista = [
      {
          id: 1,
          nombre: 'lucario',
          habilidades: [
              {
                  id: 1,
                  nombre: 'impasible'
              },
              {
                  id: 2,
                  nombre: 'foco interno'
              },
              {
                  id: 3,
                  nombre: 'justiciero'
              }
          ]
      },
      {
          id: 2,
          nombre: 'pikachu',
          habilidades: [
              {
                  id: 4,
                  nombre: 'pararayos'
              },
              {
                  id: 5,
                  nombre: 'electricidad estatica'
              }
          ]
      },
      {
          id: 3,
          nombre: 'charmander',
          habilidades: [
              {
                  id: 1,
                  nombre: 'impasible'
              },
              {
                  id: 3,
                  nombre: 'justiciero'
              },
              {
                  id: 6,
                  nombre: 'ascua'
              }
          ]
      },
      {
          id: 4,
          nombre: 'bulbasaur',
          habilidades: [
              {
                  id: 1,
                  nombre: 'impasible'
              },
              {
                  id: 7,
                  nombre: 'hedor'
              }
          ]
      },
      {
          id: 5,
          nombre: 'raichuuu',
          habilidades: []
      }
  ]
  }// constructor

  ngOnInit() {
    console.trace('PrincipalComponent ngOnInit');
  } // ngOnInit

}
