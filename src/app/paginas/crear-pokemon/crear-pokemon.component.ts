import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { CheckItem } from 'src/app/model/checkItem';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-formulario-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.scss']
})
export class CrearPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  formulario: FormGroup;

  mostrar: boolean;

  options: Array<CheckItem>;
  habilidadesForm: FormArray;

  ngOnChanges() {
    if(this.pokemon){
      debugger;
      console.log('change');
      this.formulario.get('id').setValue(this.pokemon.id);
      this.formulario.get('nombre').setValue(this.pokemon.nombre);
      this.actualizarHabilidadesPokemon();
    }

  }

  actualizarHabilidadesPokemon() {
    this.habilidadesForm.clear();

    this.pokemon.habilidades.forEach(
      habilidad => {
        this.habilidadesForm.push(this.crearFormGroupHabilidad(habilidad.nombre, habilidad.id));
      }
    );

    this.options.forEach(
      option => {
        option.checked = this.pokemon.habilidades.some(el => el.id === option.value);
      }
    )
  }

  constructor(private builder: FormBuilder, private pokemonService : PokemonService, private habilidadService: HabilidadService) {

    if (!this.pokemon) {
      this.pokemon = new Pokemon();
    }
    this.crearFormulario();

    this.options = new Array<CheckItem>();
    this.mostrar = false;

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
    console.trace('ngOnInit CrearPokemonComponent');
    this.cargarHabilidades();
  }// ngOnInit

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
