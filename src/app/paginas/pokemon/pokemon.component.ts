import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {


  id: number;
  pokemon: Pokemon;
  editando: boolean;

  formulario: FormGroup;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute,
              private builder: FormBuilder) {
    this.id = 0;
    this.pokemon = new Pokemon();
    this.editando = false;

    this.formulario = this.builder.group({
      nombre: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.pokemonService.getPokemonById(this.id).subscribe((pokemon => {
        this.pokemon = pokemon;
        this.formulario.controls.nombre.setValue(pokemon.nombre);
      }));
    });
  }

  enviar(value: any) {
    console.debug(value);
    this.pokemon.nombre = value.nombre;

    this.pokemonService.putPokemon(this.pokemon).subscribe(
      (data) => {
        console.debug('POKEMON UPDATE: %o', data);
      }
    )
  }

  borrarPokemon() {
    this.pokemonService.deletePokemon(this.pokemon.id).subscribe(
      (dato) => {
        console.debug(dato);
      };
  }

}
