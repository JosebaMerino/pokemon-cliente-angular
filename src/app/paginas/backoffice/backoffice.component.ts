import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})

export class BackofficeComponent implements OnInit {

  alerta: Alerta;
  pokemons: Array<Pokemon>;
  pokemonSelecionado: Pokemon;

  constructor(private pokemonService: PokemonService) {
    this.alerta = new Alerta();
    this.pokemons = new Array<Pokemon>();
    this.pokemonSelecionado = undefined;
  }// constructor

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      (pokemons) => {
        this.pokemons = pokemons;
      }
    );
  }// ngOnInit

  selecionarPokemon(pokemon: Pokemon) {
    console.trace('Pokemon selecconado : %o', pokemon);
    this.pokemonSelecionado = pokemon;
  }



}// BackofficeComponent


class Alerta {
  mostrandose: boolean;
  mensaje: string;

  constructor() {
    this.mostrandose = false;
    this.mensaje = '';
  }
}// Alerta
