import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';
import { CrearPokemonComponent } from './paginas/crear-pokemon/crear-pokemon.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'pokemon/:id', component: PokemonComponent},
  {path: 'pokemon', component: CrearPokemonComponent}
];

export const RUTAS = [
  {
    nombre: 'principal',
    URL: '/'
  },
  {
    nombre: 'crear pokemon',
    URL: '/pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
