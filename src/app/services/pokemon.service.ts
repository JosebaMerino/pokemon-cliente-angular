import { Injectable } from '@angular/core';
import { IPokemonService } from './IPokemon.service';
import { Pokemon } from '../model/pokemon';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {
  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }
  getPokemonById(id: number): Observable<Pokemon> {
    console.debug('GET POKEMON ' + id);
    const url = `${environment.APIURL}/api/pokemon/${id}`;

    return this.http.get<Pokemon>(url);
  }
  getPokemons(): Observable<Pokemon[]> {
    console.debug('GET ALL POKEMONS');

    const url = `${environment.APIURL}/api/pokemon/`;
    return this.http.get<Pokemon[]>(url);
  }

  putPokemon(poke: Pokemon) {
    console.debug('PUT POKEMON' + poke.id);

    const url = `${environment.APIURL}/api/pokemon/${poke.id}`;
    return this.http.put<Pokemon>(url, poke, { withCredentials: true });
  }

  deletePokemon(id: number) {
    console.debug('DELETE POKEMON' + id);

    const url = `${environment.APIURL}/api/pokemon/${id}`;
    return this.http.delete<Pokemon>(url);
  }

  postPokemon(poke: Pokemon): Observable<Pokemon> {
    console.debug('POST POKEMON ' + poke.id);

    const url = `${environment.APIURL}/api/pokemon/`;
    return this.http.post<Pokemon>(url, poke);
  }

}
