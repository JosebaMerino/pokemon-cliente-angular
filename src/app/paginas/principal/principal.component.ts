import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  lista: Array<Pokemon>;
  pokemonSeleccionado: Pokemon;

  constructor(private pokemonService: PokemonService) {
    console.trace('PrincipalComponent constructor');

    this.lista = [];
    this.pokemonSeleccionado = undefined;
  }// constructor

  ngOnInit() {
    console.trace('PrincipalComponent ngOnInit');

    this.pokemonService.getPokemons().subscribe(
      (pokemons) => {
        this.lista = pokemons;
      }
    );

  } // ngOnInit

  seleccionarPokemon(pokemon: Pokemon) {
    console.debug('Pokemon seleccionado: %o', pokemon)
    this.pokemonSeleccionado = pokemon;
  }

}
