import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { CheckItem } from 'src/app/model/checkItem';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-crear-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.scss']
})
export class CrearPokemonComponent implements OnInit {

  formulario: FormGroup;

  options: Array<CheckItem>;
  habilidadesForm: FormArray;

  constructor(private builder: FormBuilder, private pokemonService : PokemonService, private habilidadService: HabilidadService) {
    this.crearFormulario();

    this.options = new Array<CheckItem>();
    // this.options.push(new CheckItem('Impasible', 1));
    // this.options.push(new CheckItem('Rayos', 2));
    // this.options.push(new CheckItem('Oloroso', 3));
  }

  crearFormulario() {
    this.formulario = this.builder.group({
      id: new FormControl(0),
      nombre: new FormControl('',
                              Validators.compose(
                                  [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(50)
                                  ])
                              ),
      habilidades:  this.builder.array([ ], // Creamos array sin habilidades
                                    Validators.compose(
                                    [
                                      Validators.required,
                                      Validators.minLength(1)
                                    ])
                                )
    });
    this.habilidadesForm = this.formulario.get('habilidades') as FormArray;
  }

  ngOnInit() {
    this.cargarHabilidades();
  }

  enviar(value: any) {

    console.debug('Submitado!');
    const pokemon = new Pokemon();
    pokemon.id = value.id;
    pokemon.nombre = value.nombre;

    pokemon.habilidades = value.habilidades;

    this.pokemonService.postPokemon(pokemon).subscribe(
      (pok) => {
        console.debug('He creado el pokemon y traigo %o', pok);
      }
    );



  }

  private crearFormGroupHabilidad(nombre: string, id: number): FormGroup {
    return this.builder.group({
      id: new FormControl(id),
      nombre: new FormControl(nombre)
    });
  } // crearFormGroupHabilidad

  checkCambiado(option: CheckItem) {
    console.debug('Se ha seleccionado : %o', option);

    if (option.checked) {
      // Se crea una nueva habilidad
      const habilidad = this.crearFormGroupHabilidad(option.name, option.value);
      this.habilidadesForm.push(habilidad);
    } else {
      // Se borra la habilidad de la lista
      this.habilidadesForm.removeAt(this.habilidadesForm.value.findIndex(habilidad => habilidad.id === option.value));
    }
  } // checkCambiado(option)


  // BY MIKEL BUA SAPI --> Cargar habilidades
  cargarHabilidades() {
    this.habilidadService.getAll().subscribe(
      (habilidades) => {
        habilidades.forEach(
          habilidad => {
            this.options.push(new CheckItem(habilidad.nombre, habilidad.id));
          }
        )
      }
    )
  }// cargarHabilidades

} // Crear pokemon
