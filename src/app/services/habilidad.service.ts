import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHabilidadService } from './IHabilidad.service';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService implements IHabilidadService {

  constructor( private http : HttpClient) {
    console.trace('constructor HabilidadService');
  }// constructor

  getAll(): Observable<Habilidad[]> {
    const url = 'http://localhost:8080/pokemon-rest/api/habilidad';
    console.debug('GET ALL %s', url);
    return this.http.get<Habilidad[]>(url);
  }

}
