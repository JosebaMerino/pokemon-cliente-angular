import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Habilidad } from 'src/app/model/habilidad';
import { CheckItem } from 'src/app/model/checkItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lista: Array<Pokemon>;
  listaFiltrados: Array<Pokemon>;

  pokemonSeleccionado: Pokemon;
  habilidades: Array<Habilidad>;
  checkHabilidades: Array<CheckItem>;

  isCollapsedBusqueda: boolean;

  nombreBusqueda: string;

  constructor(private pokemonService: PokemonService, private router: Router) {
    console.trace('PrincipalComponent constructor');

    this.lista = [];
    this.listaFiltrados = [];

    this.pokemonSeleccionado = undefined;
    this.habilidades = new Array<Habilidad>();
    this.checkHabilidades = new Array<CheckItem>();

    this.nombreBusqueda = '';

    this.isCollapsedBusqueda = true;
  }// constructor

  ngOnInit() {
    console.trace('PrincipalComponent ngOnInit');

    this.pokemonService.getPokemons().subscribe(
      (pokemons) => {
        this.lista = pokemons;
        this.listaFiltrados = pokemons;
        this.habilidades =
          pokemons.reduce((ac, cur, index, array) => {
            return ac.concat(cur.habilidades);
          }, []);
        this.habilidades = this.habilidades.reduce((ac, cur) => {
          if (!ac.some(el => el.nombre === cur.nombre)) {
            ac.push(cur);
          }
          return ac;
          }, []);
        this.habilidades.forEach(
          (ha) => {
          this.checkHabilidades.push(new CheckItem(ha.nombre, ha.id));
        });
      }
    );

  } // ngOnInit

  seleccionarPokemon(pokemon: Pokemon) {
    console.debug('Pokemon seleccionado: %o', pokemon);
    this.pokemonSeleccionado = pokemon;
  }// seleccionarPokemon

  verDetalle(pokemon: Pokemon) {
    console.debug(pokemon);

    this.router.navigate([`pokemon/${pokemon.id}`]);
  }

  filtrarPokemons() {
    const habilidades = this.checkHabilidades.filter(el => el.checked).map(el => el.name);


    if( habilidades.length !== 0 ) {

      // que tienen alguna habilidad de la lista
      this.listaFiltrados = this.lista.filter(
        (pokemon) => {
          return pokemon.habilidades.some( el => habilidades.includes(el.nombre));
        }
        );
    } else {
      this.listaFiltrados = this.lista;
    }
  }// filtrarPokemons

}
