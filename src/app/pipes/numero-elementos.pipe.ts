import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroElementos'
})
export class NumeroElementosPipe implements PipeTransform {

  transform(elementos: Array<any>, num: number, ignorar: boolean): any {
    let resul: Array<any>;
    if(ignorar) {
      resul = elementos;
    } else {
      resul = new Array<any>();

      for (let i = 0; i < num; i++) {
        resul.push(elementos[i]);

      }
    }
    return resul;
  }

}
