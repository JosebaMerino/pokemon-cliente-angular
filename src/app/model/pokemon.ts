import { Habilidad } from './habilidad';

export class Pokemon {
  private _id: number;
  private _nombre: string;
  private _habilidades: Array<Habilidad>;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get habilidades(): Array<Habilidad> {
    return this._habilidades;
  }
  public set habilidades(value: Array<Habilidad>) {
    this._habilidades = value;
  }


}

/*
id: 1,
          nombre: 'lucario',
          habilidades: [
              {
                  id: 1,
                  nombre: 'impasible'
              },
              {
                  id: 2,
                  nombre: 'foco interno'
              },
              {
                  id: 3,
                  nombre: 'justiciero'
              }
          ]
*/