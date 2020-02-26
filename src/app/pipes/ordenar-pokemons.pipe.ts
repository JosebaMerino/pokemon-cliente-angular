import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Pipe({
  name: 'ordenarPokemons'
})
export class OrdenarPokemonsPipe implements PipeTransform {

  transform(value: Array<Pokemon>): any {
    return value.sort((a,b) => {
      return a.id - b.id;
    })
  }

}
