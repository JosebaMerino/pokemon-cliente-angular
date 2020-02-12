import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';

export interface IPokemonService {
  /**
   * Devuelve un pokemon con ese ID.
   * @param id del pokemon a buscar
   */
  getPokemonById(id: number);

  /**
   * Devuelve todos los pokemons existentes
   */
  getPokemons(): Observable<Pokemon[]>;


}
