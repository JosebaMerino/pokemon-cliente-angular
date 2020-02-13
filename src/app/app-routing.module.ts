import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'pokemon/:id', component: PokemonComponent}
];

export const RUTAS = [
  {
    nombre: 'principal',
    URL: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
