import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})

export class BackofficeComponent implements OnInit {

  alerta: Alerta;
  pokemons: Array<Pokemon>;
  pokemonSelecionado: Pokemon;

  formulario: FormGroup;

  constructor(private pokemonService: PokemonService, private buider: FormBuilder) {
    this.alerta = new Alerta();
    this.alerta.mostrandose = true;
    this.pokemons = new Array<Pokemon>();
    this.pokemonSelecionado = undefined;

    this.formulario = this.buider.group({
      id: [0],
      nombre: ['', [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    });
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

    this.formulario.get('id').setValue(pokemon.id);
    this.formulario.get('nombre').setValue(pokemon.nombre);

  }

  enviar(values : any) {
    console.debug(values.nombre);
    const pokemon = new Pokemon();

    pokemon.id = values.id;
    pokemon.nombre = values.nombre;

    if(pokemon.id === 0) {
      console.debug('CREAR');

      this.pokemonService.postPokemon(pokemon).subscribe(
        (dato) => {
          console.debug(dato);
          this.refrescarLista();
        }
      );
    } else {
      console.debug('MODIFICAR');
      this.pokemonService.putPokemon(pokemon).subscribe(
        (dato) => {
          console.debug(dato);
          this.refrescarLista();
        }
      );
    }

  }// enviar

  borrarPokemon(pokemon: Pokemon) {
    console.debug('Borrando pokemon %o', pokemon);
    if(confirm('Desea borrar el pokemon ' + pokemon.nombre + '?')) {
      if(this.pokemonSelecionado && this.pokemonSelecionado.id === pokemon.id){
        this.pokemonSelecionado = undefined;
        this.limpiarFormulario();
      }
      this.pokemonService.deletePokemon(pokemon.id).subscribe(
        (dato) => {
          console.debug('Vengo de borrar y traigo: %o',dato);
          this.refrescarLista();
        }
      )
    }
  }

  refrescarLista() {
    this.pokemonService.getPokemons().subscribe(
      (pokemons) => {
        this.pokemons = pokemons;
      }
    );
  } // refrescarLista

  limpiarFormulario() {
    this.formulario.get('id').setValue(0);
    this.formulario.get('nombre').setValue('');

  }// limpiarFormulario



}// BackofficeComponent


class Alerta {
  mostrandose: boolean;
  mensaje: string;

  constructor() {
    this.mostrandose = false;
    this.mensaje = '';
  }
}// Alerta
