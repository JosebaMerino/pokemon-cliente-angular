import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

export interface IHabilidadService {

  /**
   * Devuelve todos las habilidades
   */
  getAll(): Observable<Habilidad[]>;
}
