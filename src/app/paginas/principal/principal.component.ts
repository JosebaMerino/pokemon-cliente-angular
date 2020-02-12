import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Habilidad } from 'src/app/model/habilidad';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lista: Array<Pokemon>;
  pokemonSeleccionado: Pokemon;
  habilidades: Set<Habilidad>;

  constructor(private pokemonService: PokemonService) {
    console.trace('PrincipalComponent constructor');

    this.lista = [];
    this.pokemonSeleccionado = undefined;
    this.habilidades = new Set<Habilidad>();
  }// constructor

  ngOnInit() {
    console.trace('PrincipalComponent ngOnInit');

    this.pokemonService.getPokemons().subscribe(
      (pokemons) => {
        this.lista = pokemons;
        this.habilidades = new Set<Habilidad>(
          pokemons.reduce((ac, cur) => {
            return ac.concat(cur.habilidades.map(
              (el) => {
                return el.nombre;
              }
            ));
          }, [])
        );
      }
    );

  } // ngOnInit

  seleccionarPokemon(pokemon: Pokemon) {
    console.debug('Pokemon seleccionado: %o', pokemon)
    this.pokemonSeleccionado = pokemon;
  }

}
