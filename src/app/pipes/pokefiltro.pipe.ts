import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Pipe({
  name: 'pokefiltro'
})
export class PokefiltroPipe implements PipeTransform {

  transform(pokemons: Array<Pokemon>, nombre: string): any {
    return pokemons.filter((poke) => {
      return poke.nombre.includes(nombre);
    });
  }

}
