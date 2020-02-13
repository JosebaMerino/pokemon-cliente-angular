import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-crear-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.scss']
})
export class CrearPokemonComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder, private pokemonService : PokemonService) {
    this.formulario = this.builder.group({
      nombre: ['']
    });
  }

  ngOnInit() {
  }

  enviar(values : any) {
    console.debug(values.nombre);
    const pokemon = new Pokemon();

    pokemon.nombre = values.nombre;
    this.pokemonService.postPokemon(pokemon).subscribe(
      (dato)=> {
        console.debug(dato);
      }
    );
  }

}
