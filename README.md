# HOY

Que vamos a hacer?
Un nuevo proyecto.

Nos conectaremos al proyecto de pokemons de JAVA. Usando REST.

* [] Tono grisaceo al no cargar 

* [x] Recuperar el proyecto de pokemon-rest
* [x] Montar la base de datos
* [x] Arrancar el servicio REST

* [x] Crear aplicacion en Angular "pokemon-cliente-angular"
* [ ] Pagina inicial
    * [ ] Listado con todos los pokemons
    * [ ] Filtrar por nombre de pokemon
    * [ ] Filtrar por habilidad (lista de checkbox)
    * [ ] Al hacer click en un pokemon sale a la derecha el detallez
* [ ] Crear, modificar y eliminar pokemons
* [ ] Conectar la aplicacion con el seevicio rest

(Opcional)
* [] Gestionar habilidades

GET     pokemon         RESPONSE 200, 204
GET     pokemon/{id}    RESPONSE 200, 404
DELETE  pokemon/{id}    RESPONSE 200, 404
POST    pokemon/        RESPONSE 201, 
```
request body:                 response body
{                             {
  "nombre": "NUEVO_NOMBRE",     id: X,
  "habilidades": []             "nombre": "NUEVO_NOMBRE"
}                             }

                              409: nombre duplicado, nombre min 1 max 50
```
PUT    pokemon/        RESPONSE 200
```
request body:                 response body
{                             {
  "id": 3                       id: X,
  "nombre": "NUEVO_NOMBRE",     "nombre": "NUEVO_NOMBRE"
}                             }

                              409: nombre duplicado, nombre min 1 max 50
```
# PokemonClienteAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
