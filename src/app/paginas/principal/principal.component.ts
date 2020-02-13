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
  pokemonSeleccionado: Pokemon;
  habilidades: Set<Habilidad>;
  checkHabilidades: Array<CheckItem>;

  isCollapsedBusqueda: boolean;

  nombreBusqueda: string;

  constructor(private pokemonService: PokemonService, private router: Router) {
    console.trace('PrincipalComponent constructor');

    this.lista = [];
    this.pokemonSeleccionado = undefined;
    this.habilidades = new Set<Habilidad>();
    this.checkHabilidades = new Array<CheckItem>();

    this.nombreBusqueda = '';

    this.isCollapsedBusqueda = true;
  }// constructor

  ngOnInit() {
    console.trace('PrincipalComponent ngOnInit');

    this.pokemonService.getPokemons().subscribe(
      (pokemons) => {
        this.lista = pokemons;
        this.habilidades = new Set<Habilidad>(
          pokemons.reduce((ac, cur, index, array) => {
            return ac.concat(cur.habilidades);
          }, [])
        );
        this.habilidades.forEach((ha) =>
        {
          this.checkHabilidades.push(new CheckItem(ha.nombre, ha.id));
        });
      }
    );

  } // ngOnInit

  seleccionarPokemon(pokemon: Pokemon) {
    console.debug('Pokemon seleccionado: %o', pokemon)
    this.pokemonSeleccionado = pokemon;
  }

  verDetalle(pokemon: Pokemon) {
    console.debug(pokemon);

    this.router.navigate([`pokemon/${pokemon.id}`]);
  }

}
