import { Injectable } from '@angular/core';
import { IPokemonService } from './IPokemon.service';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {
  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }
  getPokemonById(id: number): Observable<Pokemon> {
    console.debug('GET POKEMON ' + id);
    const url = `http://localhost:8080/pokemon-rest/api/pokemon/${id}`;

    return this.http.get<Pokemon>(url);
  }
  getPokemons(): Observable<Pokemon[]> {
    console.debug('GET ALL POKEMONS');

    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/';
    return this.http.get<Pokemon[]>(url);
  }

  putPokemon(poke: Pokemon) {
    console.debug('PUT POKEMON' + poke.id);

    const url = `http://localhost:8080/pokemon-rest/api/pokemon/${poke.id}`;
    return this.http.put<Pokemon>(url, poke);
  }

}
